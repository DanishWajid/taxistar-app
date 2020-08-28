import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  H3
} from "native-base";
import {
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Alert,
  Image
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { ProgressDialog } from "react-native-simple-dialogs";

import { Textinput } from "../components/textInput";
import { Buttons } from "../components/button";
import { loginUser } from "../actions/Login";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressVisible: false,
      email: "",
      pass: "",
      userError: ""
    };
  }

  loginNow = async () => {
    console.log(this.props.isLoggedIn);
    this.setState({ progressVisible: true });
    await this.props.dispatch(
      loginUser({ email: this.state.email, pass: this.state.pass })
    );
    setTimeout(() => {
      this.setState({ progressVisible: false });
      if (this.props.isLoggedIn) {
        this.props.navigation.navigate("Home");
      } else {
        this.setState({ userError: this.props.userData.error});
      }
    }, 2500);

  };

  render() {
    return (
      <View style={styles.loginBg}>
        <Image
          source={require("../assets/loginTop.jpg")}
          style={{ width: "100%", height: "45%" }}
        />
        <View style={styles.middleSection}>
          <Text style={styles.error}>{this.state.userError}</Text>
          <Textinput
            floatingLabel
            keyboardType={"email-address"}
            returnType="next"
            placeholder="Email"
            placeholderColor="#000"
            borderColor="#000"
            textChanged={email => this.setState({ email: email })}
          />
          <Textinput
            floatingLabel
            secureTextEntry={true}
            placeholder="Password"
            placeholderColor="#000"
            borderColor="#000"
            textChanged={pass => this.setState({ pass: pass })}
          />
          <Buttons
            handlePress={() => this.loginNow()}
            title="login"
            block
            light
            textStyle={styles.btnColor}
            textColor={styles.textColor}
          />
          <View
            style={{ marginTop: 30, marginRight: 20, alignSelf: "flex-end" }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("ForgetPassword")}
            >
              <Text style={styles.forgetpasstext}>Forget Password ?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ProgressDialog
          visible={this.state.progressVisible}
          title="Authenticating"
          message="Please, wait..."
          disabled={this.props.progress}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  loginBg: {
    backgroundColor: "#fff",
    flex: 1
  },
  error: {
    color: "red"
  },
  middleSection: {
    justifyContent: "center",
    alignItems: "center",
    padding:15
  },
  btnColor: {
    backgroundColor: "$buttonColor"
  },
  textColor: {
    color: "#fff"
  },
  forgetpasstext: {
    color: "$buttonColor",
    textDecorationLine: "underline"
  }
});

const mapStateToProps = state => {
  const userData = state.login.userData;
  const isLoggedIn = state.login.isLoggedIn;
  return {
    userData,
    isLoggedIn
  };
};

export default connect(mapStateToProps)(Login);
