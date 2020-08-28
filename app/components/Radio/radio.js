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
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";

export default class CustomRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelect=(value)=>{
   alert('value : ', value);
  }

  render() {
    return (
        <RadioGroup
        onSelect = {(index, value) => this.onSelect(index, value)}
      >
        <RadioButton value={'item1'} >
          <Text>Male</Text>
        </RadioButton>
      </RadioGroup>
      
    );
  }
}

const styles = EStyleSheet.create({});
