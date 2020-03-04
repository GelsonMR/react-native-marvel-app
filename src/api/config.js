import Config from 'react-native-config';
import md5 from 'md5';

const charactersMock = require('../../mocks/charactersSuccessResponse.json');

export default {
  MARVEL: {
    mock: {
      enabled: Config.ENV === 'mock',
      timeout: 2000,
    },
    host: Config.API_HOST,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    params: () => {
      const ts = Date.now();
      const apikey = Config.PUBLIC_KEY;
      const hash = md5(`${ts}${Config.PRIVATE_KEY}${apikey}`);

      return {
        ts,
        apikey,
        hash,
      };
    },
    actions: {
      getCharacters: {
        endpoint: '/characters',
        method: 'GET',
        responseMock: charactersMock,
      },
      getCharacterDetail: {
        endpoint: '/characters/:id',
        method: 'GET',
      },
    },
  },
};
