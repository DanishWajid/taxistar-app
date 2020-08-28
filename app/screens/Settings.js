import React, { Component } from "react";
import { View, Text, TouchableHighlight, ScrollView } from "react-native";
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
  Radio
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import { connect } from "react-redux";
import DialogProgress from "react-native-dialog-progress";

import { CustomHeader } from "../components/Header";
import { CustomRadio } from "../components/Radio";
import Dialog, {
  DialogTitle,
  SlideAnimation,
  DialogContent
} from "react-native-popup-dialog";

const options = {
  message: "Please Wait...",
  isCancelable: true,
  color: "red"
};
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: false
    };
  }

  componentWillMount = () => {
    DialogProgress.show(options);
  };

  componentDidMount = () => {
    DialogProgress.hide();
  };
  render() {
    return (
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <CustomHeader
          iconName="menu"
          title="Settings"
          openDrawer={(drawerOpen = () => this.props.navigation.openDrawer())}
        />
        <ScrollView>
          <View style={{ padding: 15 }}>
            <Text style={styles.topHeading}>Profile</Text>
          </View>

          <View>
            <TouchableHighlight>
              <View style={styles.row}>
                <Icon name="person" style={styles.icon} />
                <View style={styles.details}>
                  <Text style={styles.contentMain}>Name</Text>
                  <Text>{this.props.userData.username}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight>
              <View style={styles.row}>
                <Icon name="phone-portrait" style={styles.icon} />
                <View style={styles.details}>
                  <Text style={styles.contentMain}>Priority</Text>
                  <Text>{this.props.userData.priority}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("phone_Number")}
            >
              <View style={styles.row}>
                <Icon name="phone-portrait" style={styles.icon} />
                <View style={styles.details}>
                  <Text style={styles.contentMain}>Mobile Number</Text>
                  <Text>{this.props.userData.phone}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight>
              <View style={styles.row}>
                <Icon name="mail" style={styles.icon} />
                <View style={styles.details}>
                  <Text style={styles.contentMain}>Email</Text>
                  <Text>{this.props.userData.email}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight onPress={() => this.setState({ model: true })}>
              <View style={styles.row}>
                <Icon name="transgender" style={styles.icon} />
                <View style={styles.details}>
                  <Text style={styles.contentMain}>Gender</Text>
                  <Text>Male</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("changePass")}
            >
              <View style={styles.row}>
                <Icon name="unlock" style={styles.icon} />
                <View style={styles.details}>
                  <Text style={styles.contentMain}>Change Password</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight>
              <View style={styles.row}>
                <Icon name="calendar" style={styles.icon} />
                <View style={styles.details}>
                  <Text style={styles.contentMain}>Date of birth</Text>
                  <Text>muhammadnauman475@gmail.com</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={{ padding: 15 }}>
            <Text style={styles.topHeading}>General</Text>
          </View>

          <TouchableHighlight>
            <View style={styles.row}>
              <Icon name="star" style={styles.icon} />
              <View style={styles.details}>
                <Text style={styles.contentMain}>Rate the App</Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.row}>
              <Icon name="color-wand" style={styles.icon} />
              <View style={styles.details}>
                <Text style={styles.contentMain}>Terms and conditions</Text>
              </View>
            </View>
          </TouchableHighlight>
          <View style={{ padding: 15 }}>
            <Text style={styles.topHeading}>About</Text>
          </View>

          <TouchableHighlight>
            <View style={styles.row}>
              <Icon name="calendar" style={styles.icon} />
              <View style={styles.details}>
                <Text style={styles.contentMain}>Version Number</Text>
                <Text>1.0.0</Text>
              </View>
            </View>
          </TouchableHighlight>

          <Dialog
            visible={this.state.model}
            width={300}
            onTouchOutside={() => {
              this.setState({ model: false });
            }}
            dialogTitle={
              <DialogTitle
                title="Change Gender"
                style={{
                  backgroundColor: "#f7f7f8"
                }}
                hasTitleBar={true}
              />
            }
          >
            <DialogContent>
              <CustomRadio />
            </DialogContent>
          </Dialog>
        </ScrollView>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  row: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  details: {
    flexDirection: "column",
    alignSelf: "center",
    paddingLeft: 30
  },
  icon: {
    fontSize: 25,
    alignSelf: "center",
    width: 25,
    textAlign: "center",
    color: "#272f41"
  },
  topHeading: {
    color: "$headerColor",
    fontSize: 15
  },
  contentMain: {
    color: "#000",
    fontSize: 16,
    marginBottom: 4
  }
});
const mapStateToProps = state => {
  const userData = state.login.userData;
  const isLoggedIn = state.login.isloggedIn;
  return {
    userData,
    isLoggedIn
  };
};

export default connect(mapStateToProps)(Settings);
