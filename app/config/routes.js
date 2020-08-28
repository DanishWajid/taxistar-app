import {
    createDrawerNavigator,
    createStackNavigator,
    createMaterialTopTabNavigator,
    createAppContainer
  } from 'react-navigation';
import { DrawerItems } from 'react-navigation';
import {StatusBar, StyleSheet, AsyncStorage, Text,Image, View,SafeAreaView,Dimensions,ScrollView,AlertProvider } from 'react-native';
import { Container, Header,Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import React from 'react';
import CustomDrawerContentComponent from './CustomDrawerComponent';
import { fromLeft,fromRight } from 'react-navigation-transitions';

//import screens

import Home from '../screens/Home';
import Logout from '../screens/logout';
import Rides from '../screens/Rides';
import Settings from '../screens/Settings'
import Register_complain from '../screens/contact_us';
import Inbox from '../screens/inbox';
import ReadMesage from '../screens/readMessage'
import phone_Number from "../screens/phone_number.js";
import changePass from "../screens/changePass.js";

const HomeNavigator = createStackNavigator(
    {
        Home
    },
    {
       headerMode: 'none',
       navigationOptions:{
       headerVisible:false
          }
      } 
)

const SettingNavigator = createStackNavigator(
    {
        Settings,
        phone_Number,
        changePass
    },
    {
       transitionConfig: () => fromRight(500),
       headerMode: 'none',
       navigationOptions:{
       headerVisible:false
          }
      } 
)

const InboxNavigator = createStackNavigator(
    {
        Inbox,
        ReadMesage
    },
    {
       transitionConfig: () => fromRight(500),
       headerMode: 'none',
       navigationOptions:{
       headerVisible:false
          }
      } 
)


const routeConfigs = {
    Home:{
     screen: HomeNavigator,
     navigationOptions: {
        headerVisible: false,
        drawerLabel: 'Home',
      drawerIcon:  ({tintColor}) =>(  <Icon name="home" style={{fontSize: 20,color:tintColor}} />),
      }
    },
    Logout:{
        screen:Logout,
        navigationOptions: {
            headerVisible: false,
            drawerLabel: 'Logout',
          drawerIcon:  ({tintColor}) =>(  <Icon name="log-out" style={{fontSize: 20,color:tintColor}} />),
          }
    },
    Rides:{
        screen:Rides,
        navigationOptions: {
            headerVisible: false,
            drawerLabel: 'Rides',
          drawerIcon:  ({tintColor}) =>(  <Icon name="log-out" style={{fontSize: 20,color:tintColor}} />),
          }
    },

    Inbox:{
        screen: InboxNavigator,
        navigationOptions: {
           headerVisible: false,
           drawerLabel: 'Inbox',
         drawerIcon:  ({tintColor}) =>(  <Icon name="mail" style={{fontSize: 20,color:tintColor}} />),
         },
         transitionConfig: () => fromLeft()
       },
    Settings:{
        screen:SettingNavigator,
        navigationOptions: {
            headerVisible: false,
            drawerLabel: 'Settings',
          drawerIcon:  ({tintColor}) =>(  <Icon name="settings" style={{fontSize: 20,color:tintColor}} />),
          }
    },

    Contact:{
        screen:Register_complain,
        navigationOptions: {
            headerVisible: false,
            drawerLabel: 'Contact',
          drawerIcon:  ({tintColor}) =>(  <Icon name="mail" style={{fontSize: 20,color:tintColor}} />),
          }
    }

}

const drawerNavigatorConfig = {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: props => <CustomDrawerContentComponent {...props} />,
    contentOptions: {
        activeTintColor:'#00BADE'
    },
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute:'DrawerToggle',
    order:['Home','Rides','Inbox','Settings','Contact','Logout']
};


const MyApp = createDrawerNavigator(routeConfigs,drawerNavigatorConfig);

export default MyApp;