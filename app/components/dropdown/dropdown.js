import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Picker,
  Icon
} from "native-base";
import { View, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text style={styles.topText}>{this.props.children}</Text>
          <Item picker style={{width:'100%',borderBottomColor:'#000'}}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
            >
              <Picker.Item label="Report a bug" value="key0" />
              <Picker.Item label="Report a issue" value="key1" />
              <Picker.Item label="Other" value="key2" />
            </Picker>
          </Item>
      </View>
    );
  }
}
const styles = EStyleSheet.create({
    topText:{
        fontSize:16,
        color:'black',
        paddingBottom:10
    }
});

export default Dropdown;
