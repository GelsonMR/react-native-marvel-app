[![codecov](https://codecov.io/gh/GelsonMR/react-native-marvel-app/branch/master/graph/badge.svg)](https://codecov.io/gh/GelsonMR/react-native-marvel-app)
# React Native Marvel App
A project made to consume Marvel's API.

Everything was made based on the [prototype made on Adobe XD](https://xd.adobe.com/view/ab528763-eec1-4a2c-56d1-37ef37f2e865-dd63/).

## Features
 - [X] A cool splash screen
 - [X] Character list
 - [X] Character search
 - [X] Character info

## Running the project
First, make sure you have what [everything you need](https://reactnative.dev/docs/getting-started) to run a react-native app using the CLI.

After that you only need to install the dependencies using:

```
npm install
```

Then add a `.env` file on the root of the project with the variables:

(You can get your keys at [developer.marvel.com](developer.marvel.com))

```
ENV=production or mock
API_HOST=https://gateway.marvel.com:443/v1/public
PUBLIC_KEY=***
PRIVATE_KEY=***
```
And run it with:

```
react-native run-android
```

## Testing
Jest is the default testing library used, along with Enzyme, which made it much more easier to test the components' output.

After having all the dependencies installed you can check the coverage with the following command:
```
npm test -- --coverage
```

### Enjoy!