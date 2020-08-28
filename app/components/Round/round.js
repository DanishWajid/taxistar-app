import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Item,
  Spinner
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import PropTypes from "prop-types";

export default class RoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const bc = this.props.backgroundColor;
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={[styles.roundBtn, { backgroundColor: bc }]}
          onPress={this.props.btnClicked}
        >
          <Text style={{ color: "#000", fontSize: 17, fontWeight: "bold" }}>
            {this.props.toggleBtn}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = EStyleSheet.create({
  roundBtn: {
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 100
  },
  mainContainer: {
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    borderRadius: 120,
    backgroundColor:'#fff'
  }
});
