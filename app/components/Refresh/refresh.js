import React from "react";
import { StyleSheet, View, TouchableOpacity,refreshControl,RefreshControl,ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Item,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Icon,
  Thumbnail
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

export default class Refresh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

        refreshing:false
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    return (
          <View>
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
                />
                  }>
          </View>
    );
  }
}

const styles = EStyleSheet.create({

});
