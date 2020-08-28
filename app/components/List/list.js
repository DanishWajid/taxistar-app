import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  refreshControl,
  RefreshControl,
  ScrollView,
  TouchableHighlight
} from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Card,
  CardItem
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

export default class CustomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    alert(this.props.listItemClicked)
    return (
      <List>
        <ListItem avatar onPress={()=>this.props.navigation.navigate('ReadMesage')}>
          <Left>
            <Thumbnail
              source={require("../../assets/drawer_images/person-icon.png")}
            />
          </Left>
          <Body>
            <Text style={styles.sender_name}>Kumar Pratik</Text>
            <Text note>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail
              source={require("../../assets/drawer_images/person-icon.png")}
            />
          </Left>
          <Body>
            <Text style={styles.sender_name}>Kumar Pratik</Text>
            <Text note>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>

                <ListItem avatar>
          <Left>
            <Thumbnail
              source={require("../../assets/drawer_images/person-icon.png")}
            />
          </Left>
          <Body>
            <Text style={styles.sender_name}>Kumar Pratik</Text>
            <Text note>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>

                <ListItem avatar>
          <Left>
            <Thumbnail
              source={require("../../assets/drawer_images/person-icon.png")}
            />
          </Left>
          <Body>
            <Text style={styles.sender_name}>Kumar Pratik</Text>
            <Text note>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>

                <ListItem avatar>
          <Left>
            <Thumbnail
              source={require("../../assets/drawer_images/person-icon.png")}
            />
          </Left>
          <Body>
            <Text style={styles.sender_name}>Kumar Pratik</Text>
            <Text note>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail
              source={require("../../assets/drawer_images/person-icon.png")}
            />
          </Left>
          <Body>
            <Text style={styles.sender_name}>Kumar Pratik</Text>
            <Text note>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail
              source={require("../../assets/drawer_images/person-icon.png")}
            />
          </Left>
          <Body>
            <Text style={styles.sender_name}>Kumar Pratik</Text>
            <Text note>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail
              source={require("../../assets/drawer_images/person-icon.png")}
            />
          </Left>
          <Body>
            <Text style={styles.sender_name}>Kumar Pratik</Text>
            <Text note>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
      </List>
    );
  }
}

const styles = EStyleSheet.create({
  sender_name: {
    fontWeight: "bold"
  }
});
