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
  Thumbnail
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

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
          <Text style={styles.leftText}>Tuesday, 7:02 PM</Text>
          <Text style={styles.leftText}>PKR 328 </Text>
        </View>

        <View style={styles.descBox}>
          <View style={styles.thumbView}>
            <Thumbnail
              style={styles.avatar}
              source={require("../../assets/icons/download.jpg")}
            />
          </View>

          <View style={styles.locSettings}>
            <Text style={styles.pickUp}>
              Unique Bakers, Saidpur Road-Block B-Rawalpinid
            </Text>

            <Text style={styles.dropOf}>
              Comsians Boys Hostel, Chatta Bakhtawar-Chatta...
            </Text>
          </View>
        </View>

        <View style={styles.topRide}>
          <Text style={styles.leftText}>Tuesday, 7:02 PM</Text>
          <Text style={styles.leftText}>PKR 328 </Text>
        </View>

        <View style={styles.descBox}>
          <View style={styles.thumbView}>
            <Thumbnail
              style={styles.avatar}
              source={require("../../assets/icons/download.jpg")}
            />
          </View>

          <View style={styles.locSettings}>
            <Text style={styles.pickUp}>
              Unique Bakers, Saidpur Road-Block B-Rawalpinid
            </Text>

            <Text style={styles.dropOf}>
              Comsians Boys Hostel, Chatta Bakhtawar-Chatta...
            </Text>
          </View>
        </View>

        <View style={styles.topRide}>
          <Text style={styles.leftText}>Tuesday, 7:02 PM</Text>
          <Text style={styles.leftText}>PKR 328 </Text>
        </View>

        <View style={styles.descBox}>
          <View style={styles.thumbView}>
            <Thumbnail
              style={styles.avatar}
              source={require("../../assets/icons/download.jpg")}
            />
          </View>

          <View style={styles.locSettings}>
            <Text style={styles.pickUp}>
              Unique Bakers, Saidpur Road-Block B-Rawalpinid
            </Text>

            <Text style={styles.dropOf}>
              Comsians Boys Hostel, Chatta Bakhtawar-Chatta...
            </Text>
          </View>
        </View>

        <View style={styles.topRide}>
          <Text style={styles.leftText}>Tuesday, 7:02 PM</Text>
          <Text style={styles.leftText}>PKR 328 </Text>
        </View>

        <View style={styles.descBox}>
          <View style={styles.thumbView}>
            <Thumbnail
              style={styles.avatar}
              source={require("../../assets/icons/download.jpg")}
            />
          </View>

          <View style={styles.locSettings}>
            <Text style={styles.pickUp}>
              Unique Bakers, Saidpur Road-Block B-Rawalpinid
            </Text>

            <Text style={styles.dropOf}>
              Comsians Boys Hostel, Chatta Bakhtawar-Chatta...
            </Text>
          </View>
        </View>

        <View style={styles.topRide}>
          <Text style={styles.leftText}>Tuesday, 7:02 PM</Text>
          <Text style={styles.leftText}>PKR 328 </Text>
        </View>

        <View style={styles.descBox}>
          <View style={styles.thumbView}>
            <Thumbnail
              style={styles.avatar}
              source={require("../../assets/icons/download.jpg")}
            />
          </View>

          <View style={styles.locSettings}>
            <Text style={styles.pickUp}>
              Unique Bakers, Saidpur Road-Block B-Rawalpinid
            </Text>

            <Text style={styles.dropOf}>
              Comsians Boys Hostel, Chatta Bakhtawar-Chatta...
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
});
