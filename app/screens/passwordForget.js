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
import { Textinput } from "../components/textInput";
import { Buttons } from "../components/button";
import { ProgressDialog } from "react-native-simple-dialogs";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Header transparent>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-round-back" style={{ color: "#000" }} />
            </Button>
          </Left>
          <Body />
        </Header>
        <Content>
          <View style={{ marginTop: 20, padding:20 }}>
            <Text style={styles.TopHeading}>Forget your password ?</Text>
            <Text>Enter your email to find your account. </Text>

            <View style={{ marginTop: 50}}>
              <Textinput
                floatingLabel
                placeholder="Email Address"
                placeholderColor="#000"
                borderColor="#000"
                keyboardType={"email-address"}
              />
              <Buttons
                title="Send Email"
                block
                light
                textStyle={styles.btnColor}
                textColor={styles.textColor}
              />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  TopHeading: {
    fontSize: 25,
    color: "#000",
    marginBottom: 5
  },
  btnColor: {
    backgroundColor: "$buttonColor"
  },
  textColor: {
    color: "#fff"
  }
});
export default ForgetPassword;
