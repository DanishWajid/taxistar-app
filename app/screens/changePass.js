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

class changePass extends Component {
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
          <View style={styles.TopViewHandler}>
            <Text style={styles.TopHeading}>Update your Password</Text>
            <Text>Enter your password and confirm password </Text>

            <View style={styles.manageFieldView}>
              <Textinput
                floatingLabel
                secureTextEntry={true}
                placeholder="Password"
                placeholderColor="#000"
                borderColor="#000"
                text
                keyboardType={"numeric"}
              />

              <Textinput
                floatingLabel
                secureTextEntry={true}
                placeholder="Confirm Password"
                placeholderColor="#000"
                borderColor="#000"
                text
                keyboardType={"numeric"}
              />

              <Buttons
                title="Update Number"
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
  },
  TopViewHandler: {
    padding: 20
  }
});
export default changePass;
