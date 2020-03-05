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

```
ENV=production
API_HOST=https://gateway.marvel.com:443/v1/public
PUBLIC_KEY=***
PRIVATE_KEY=***
```
And run it with:

```
react-native run-android
```