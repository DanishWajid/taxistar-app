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

class phone_Number extends Component {
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
            <Text style={styles.TopHeading}>Update your phone number</Text>
            <Text>Enter your email to find your account. </Text>

            <View style={styles.manageFieldView}>
              <Textinput
                floatingLabel
                placeholder="Phone Number"
                placeholderColor="#000"
                borderColor="#000"
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
  TopViewHandler:{
      padding:20
  }
});
export default phone_Number;
