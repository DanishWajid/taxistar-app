import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
} from "native-base";
import {
  View,
  StatusBar,
  SafeAreaView
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let customBtn;
    if (this.props.clicked) {
      customBtn = (
        <Button onPress={this.props.clicked} style={styles.rightButton}>
          <Text>{this.props.btnText}</Text>
        </Button>
      );
    }
    return (
      <SafeAreaView>
      <Header style={styles.headerbc}>
      <StatusBar backgroundColor="#1d347f" barStyle="light-content" />
        <Left>
          <Button transparent>
            <Icon name={this.props.iconName} onPress={this.props.openDrawer} />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>{customBtn}</Right>
      </Header>
      </SafeAreaView>
    );
  }
}
const styles = EStyleSheet.create({
  headerbc: {
    backgroundColor: "$headerColor"
  },

  rightButton: {
    backgroundColor: "$buttonColor"
  }
});

export default CustomHeader;
