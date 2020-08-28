import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView
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
  Thumbnail
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import { connect } from "react-redux";
import DialogProgress from "react-native-dialog-progress";

import { CustomHeader } from "../components/Header";
import { CustomList } from "../components/List";

const options = {
  message: "Please Wait...",
  isCancelable: true,
  color:'red'
};
class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount=()=>{
    DialogProgress.show(options)
  }

  componentDidMount=()=>{
    DialogProgress.hide();
  }
  listItemClicked = () => {
    alert("clicked");
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          iconName="menu"
          title="Inbox"
          openDrawer={(drawerOpen = () => this.props.navigation.openDrawer())}
        />

        <View style={styles.topParent}>
          <View style={styles.innerParentOne}>
            <View style={styles.inner_col1}>
              <Icon name="stats" style={styles.stats_icon} />
              <Text style={styles.top_text}>Inbox</Text>
            </View>

            <View style={styles.inner_col1}>
              <Thumbnail
                source={require("../assets/drawer_images/person-icon.png")}
              />
              <Text style={styles.top_text}>Profile</Text>
            </View>

            <View style={styles.inner_col1}>
              <Icon name="settings" style={styles.stats_icon} />
              <Text style={styles.top_text}>Settings</Text>
            </View>
          </View>
          <View style={styles.innerParrentTwo}>
            <ScrollView>
              <CustomList
                navigation={this.props.navigation}
                onPressClicked={this.listItemClicked}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  topParent: {
    flex: 1
  },
  innerParentOne: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$RideDateColor"
  },
  innerParrentTwo: {
    flex: 2
  },
  inner_col1: {
    flex: 1,
    alignItems: "center"
  },
  stats_icon: {
    color: "$inboxIconColor",
    fontSize: 70
  },
  top_text: {
    color: "$inboxIconColor",
    fontSize: 17
  }
});

export default Inbox;
