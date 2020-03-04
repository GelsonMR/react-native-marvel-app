import apiConfig from './config';

function queryParametersToUrl(parameters) {
  const parametersKeys = parameters ? Object.keys(parameters) : [];
  const nonEmptyParameters = parametersKeys.reduce((accumulator, currentValue) => {
    const parameterValue = parameters[currentValue];
    const isEmpty = parameterValue === null || parameterValue === undefined;
    if (!isEmpty) {
      accumulator[currentValue] = parameterValue;
    }
    return accumulator;
  }, {});
  const nonEmptyParametersKeys = Object.keys(nonEmptyParameters);
  if (!nonEmptyParametersKeys.length) {
    return '';
  }

  const mountedQueryParameters = nonEmptyParametersKeys.reduce((accumulator, currentValue) => {
    const parameterValue = parameters[currentValue];
    return `${accumulator + (accumulator && '&')}${currentValue}${parameterValue && '='}${parameterValue}`;
  }, '');
  return `?${mountedQueryParameters}`;
}

function insertParametersToUrl(pristineUrl, pristineParameters) {
  const parameters = pristineParameters;
  const splitted = pristineUrl.split('/:');
  let mountedUrl = pristineUrl;
  if (splitted.length > 1) {
    mountedUrl = splitted.reduce((url, currentValue, currentIndex) => {
      if (!currentIndex) {
        return currentValue;
      }
      const separateParameter = currentValue.split('/');
      const uriParameterKey = separateParameter[0];
      separateParameter.shift();
      let urlPiece = separateParameter.join('/');
      urlPiece = separateParameter.length > 0 ? `/${urlPiece}` : urlPiece;
      const parameterValue = parameters[uriParameterKey];
      delete parameters[uriParameterKey];

      return `${url}/${parameterValue}${urlPiece}`;
    });
  }
  mountedUrl += queryParametersToUrl(parameters);

  return mountedUrl;
}

function prepareApi() {
  return Object.keys(apiConfig).reduce((api, currentApiName) => {
    const {
      host,
      actions,
      headers,
      params,
      mock,
    } = apiConfig[currentApiName];

    const mountedActions = Object.keys(actions).reduce((preparedAction, currentActionName) => {
      const {
        endpoint,
        method,
        headers: actionHeaders,
        responseMock,
      } = actions[currentActionName];
      const mountedAction = async (urlParameters = {}, body, actionOptions) => {
        const mountedParams = (typeof params === 'function' ? params() : params) || {};
        const url = insertParametersToUrl(host + endpoint, { ...mountedParams, ...urlParameters });
        const mergedHeaders = { ...headers, ...actionHeaders, ...(actionOptions || {}).headers };
        const reqOptions = {
          body,
          method,
          headers: mergedHeaders,
          ...actionOptions,
        };

        if (mock.enabled) {
          return new Promise((resolve, reject) => setTimeout(() => {
            if (responseMock.ok) {
              resolve(responseMock);
            } else {
              reject(responseMock);
            }
          }, mock.timeout));
        }

        const response = await fetch(url, reqOptions);

        response.data = await response.json();

        return response;
      };
      return {
        ...preparedAction,
        [currentActionName]: mountedAction,
      };
    }, {});

    return {
      ...api,
      [currentApiName]: mountedActions,
    };
  }, {});
}

const ApiService = prepareApi();

export default ApiService;
