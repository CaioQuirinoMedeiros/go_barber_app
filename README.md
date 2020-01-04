# Go Barber - APP

<img src="/screenshots/login.jpg" width="160"> <img src="/screenshots/signup.jpg" width="160"> <img src="/screenshots/profile.jpg" width="160"> <img src="/screenshots/new-provider.jpg" width="160"> <img src="/screenshots/new-date.jpg" width="160"> <img src="/screenshots/new-confirm.jpg" width="160"> <img src="/screenshots/schedule.jpg" width="160">

## About

This project was developed over the Rocketseat bootcamp course and it's part of my portifolio. It's an application that helps customers schedule appointments with service providers

## Integration

This app is intented to communicate with [an NodeJS API](https://github.com/CaioQuirinoMedeiros/go_barber_api). This app is intended to the customers, so there's a [web app](https://github.com/CaioQuirinoMedeiros/go_barber_web), built with React, designed to the providers.

## :arrow_down: Installing

**Cloning the repo**

```shell
git clone https://github.com/CaioQuirinoMedeiros/go_barber_app.git

cd go_barber_app
```

**Installing dependencies**

```shell
yarn install
```

**Make sure you have [react-native environment](https://facebook.github.io/react-native/docs/getting-started) properly configured**

## :satellite: Connecting with the server API

1. Follow the instructions on [go_barber-api](https://github.com/CaioQuirinoMedeiros/go_barber_api) to have the server up and running
2. Create a _.env_ file and set a variable `REACT_APP_API_URL` with the value of your server url

- It should looks like this: `CREATE_APP_API_URL=http://127.0.0.1:3333`

3. Run `adb reverse tcp:3333 tcp:3333` so the app can communicate with the backend

## :runner: Running

- Android
  ```shell
  react-native run-android
  ```
- iOS
  ```shell
  react-native run-ios
  ```

**run metro-bundler whenever needed**

```shell
react-native start
```
