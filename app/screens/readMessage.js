import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  Item,
  ListItem,
  Icon,
  Left,
  Body,
  Button,
  Right,
  Switch,
  Thumbnail,
  H3
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import { connect } from "react-redux";

import { CustomHeader } from "../components/Header";
import { CustomList } from "../components/List";
import { Buttons } from "../components/button";

const mob_width = Dimensions.get("window").width;

class ReadMesage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.topImage}>
          <ImageBackground
            source={require("../assets/notification.jpg")}
            style={{ width: "100%", height: "100%" }}
          >
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
          <Icon name="remove-circle" style={styles.circleCross}/>
          </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.descBox}>
          <Text style={styles.TextDays}>3 days ago</Text>
          <View style={styles.mainMessage}>
            <Text style={styles.mainHeadding}>Ready? Set? Pick Rides?</Text>
            <Text style={styles.messageBody}>
              It is a long established fact that a reader will be when by the
              readable content of a page when looking at its layout.
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 5,
              width: "100%",
              alignItems: "center"
            }}
          >
            <Buttons
              handlePress={() => this.props.navigation.goBack()}
              title="Go Back"
              block
              light
              textStyle={styles.btnColor}
              textColor={styles.textColor}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  topImage: {
    flex: 1
  },
  circleCross:{
   padding:5
  },
  descBox: {
    flex: 3,
    padding: 12
  },
  TextDays: {
    fontSize: 14,
    color: "#000"
  },
  mainMessage: {
    marginTop: "5%"
  },
  mainHeadding: {
    fontSize: 25,
    marginTop: 5,
    color: "#000",
    marginBottom: 5
  },
  messageBody: {
    fontSize: 16,
    lineHeight: 25
  },

  btnGoBack: {
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "red"
  },

  btnColor: {
    backgroundColor: "$buttonColor",
    width: "100%"
  },
  textColor: {
    color: "#fff"
  }
});

export default ReadMesage;
