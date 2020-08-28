import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
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

const rideArray = [];
export default class RidesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: [],
      fontLoaded: false
    };
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <View style={styles.topRide}>
          <Text style={styles.leftText}>Tuesday, {this.props.Time}</Text>
          <Text style={styles.rightText}>{this.props.Fare}</Text>
        </View>

        <View style={styles.descBox}>
          <View style={styles.thumbView}>
            <Icon name="pin" style={styles.pinIcon} />
            <Icon name="arrow-down" style={styles.dropIcon} />
            <Icon name="radio-button-on" style={styles.pinIcon} />
          </View>

          <View style={styles.locSettings}>
            <Text style={styles.pickUp}>
              {this.props.Pickup}
            </Text>

            <Text style={styles.dropOf}>
            {this.props.Destination}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  topRide: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rightText: {
    fontSize: 18,
    fontWeight: "100",
    padding: 10
  },
  leftText: {
    fontSize: 15,
    fontWeight: "100",
    backgroundColor: "$RideDateColor",
    borderRadius: 10,
    padding: 12,
    color: "#fff"
  },
  avatar: {
    width: 40,
    height: 40
  },
  descBox: {
    flexDirection: "row",
    marginTop: 25,
    paddingLeft: 15,
    paddingBottom: 15,
    borderBottomColor: "#cecece",
    borderBottomWidth: 1
  },

  locSettings: {
    flexDirection: "column"
  },
  pickUp: {
    fontSize: 14,
    marginBottom: 12
  },
  thumbView: {
    marginRight: 5
  },
  dropOf: {
    fontSize: 14
  },
  pinIcon: {
    fontSize: 18,
    color: "$RideDateColor"
  },
  dropIcon: {
    fontSize: 17,
    color: "$RideDateColor"
  }
});
