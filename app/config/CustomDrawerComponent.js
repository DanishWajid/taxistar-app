import React, { Component } from "react";
import PropTypes from "prop-types";
import { DrawerItems } from "react-navigation";
import { connect } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  Image,
  StatusBar,
  View,
  AsyncStorage,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {
  Icon,
  Container,
  Header,
  Body,
  Button,
  Content,
  Text,
  StyleProvider
} from "native-base";

class CustomDrawerContentComponent extends Component {
  constructor(props) {
    super(props);
    // console.log('check if user is logged in',props.loggedIn);
    this.state = {
      isFontLoaded: false,
      isLoggedIn: false,
      user_email: "",
      username: ""
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={styles.TopView}
        >
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require("../assets/drawer_images/person-icon.png")}
            style={{ height: 120, width: 120, borderRadius: 60 }}
          />
          {this.props.isLoggedIn && (
            <View>
              <Text
                style={{ fontSize: 21, color: "#fff", alignSelf: "center" }}
              >
                {this.props.userData.username}
              </Text>
              <Text style={{ color: "#fff", fontSize: 15 }}>
                {this.props.userData.email}
              </Text>
            </View>
          )}
          {!this.props.isLoggedIn && (
            <Text style={{ fontSize: 21, color: "#fff" }}>Welcome Guest</Text>
          )}

          {/* {props.screenProps.usernameEmail} */}
        </View>
        <ScrollView style={styles.nav}>
          <DrawerItems {...this.props} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const userData = state.login.userData;
  const isLoggedIn = state.login.isLoggedIn;
  return {
    userData,
    isLoggedIn
  };
};

export default connect(mapStateToProps)(CustomDrawerContentComponent);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  TopView:{
    height: 220,
    backgroundColor: "$CustomDrawerColor",
    alignItems: "center",
    justifyContent: "center"
  },
  nav: {
    backgroundColor: "#fff"
  },

  icon: {
    alignItems: "center"
  }
});
