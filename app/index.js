import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Font } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { createStackNavigator } from "react-navigation";
import Navigator from "./config/routes";
import { Provider } from "react-redux";
import { store, persistor } from "./config/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { PermissionsAndroid } from "react-native";
import { fromLeft } from 'react-navigation-transitions';
window.navigator.userAgent = 'react-native';
import io from 'socket.io-client';

//import screens
import Splash from "./screens/Splash.js";
import Login from "./screens/login.js";
import ForgetPassword from "./screens/passwordForget";
import Settings from "./screens/Settings.js";
import Home from "./screens/Home";

EStyleSheet.build({
  $primaryColor: "#1d347f",
  $secondaryColor: "#00bael",
  $buttonColor: "#1d347f",
  $headerColor: "#1d347f",
  $Warningbackground: "#cc3300",
  $RideDateColor : "#1d347f",
  $inboxIconColor:'#fff',
  $CustomDrawerColor : "#00BADE",
  $RoundBtn:"#006400"
});

const LoginNavigator = createStackNavigator(
  {
    Login,
    ForgetPassword
  },
  {
    transitionConfig: () => fromLeft(500),
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location Permission",
        message: "Location Permission" + "so you can use GPS location."
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use GPS");
    } else {
      console.log("GPS location denied");
    }
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Splash />} persistor={persistor}>
          <AppDrawerNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

const AppDrawerNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        headerMode: "none",
        headerVisible: false
      }
    },
    Login: {
      screen: LoginNavigator,
      navigationOptions: {
        headerMode: "none",
        headerVisible: false
      }
    },
    AppPage: { screen: Navigator }
  },
  {
    transitionConfig: () => fromLeft(500),
    headerMode: "none",
    headerVisible: false
  }
);
