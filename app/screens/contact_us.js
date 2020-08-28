import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from "react-native";
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
  Thumbnail,
  Textarea,
  Spinner,
  Form
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

import { CustomHeader } from "../components/Header";
import { Textinput } from "../components/textInput";
import { Buttons } from "../components/button";
import { Dropdown } from "../components/dropdown";

let btnText='';
class Register_complain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Status:'Send Email',
      spinner:false,
      btnClicked:false,
    };
  }

  //Handling Email Event

  handleClickEvent = () => {
    this.setState({btnClicked:true})
  };
  render() {
    return (
      <View style={styles.mainbc}>
        <CustomHeader
          iconName="menu"
          title="Contact Us"
          openDrawer={(drawerOpen = () => this.props.navigation.openDrawer())}
        />

        <View style={styles.dropView}>
          <Dropdown>Please Select Issue</Dropdown>
          <Textinput
            floatingLabel
            returnType="next"
            placeholder="Username"
            placeholderColor="#000"
            borderColor="#000"
            textChanged={username => this.setState({ username: username })}
          />
          <Textinput
            floatingLabel
            returnType="next"
            placeholder="Subject"
            placeholderColor="#000"
            borderColor="#000"
            textChanged={username => this.setState({ username: username })}
          />

          <Textinput
            floatingLabel
            returnType="next"
            placeholder="Phone Number"
            placeholderColor="#000"
            borderColor="#000"
            textChanged={username => this.setState({ username: username })}
          />
          <Form style={{width:'100%', marginTop: 50 }}>
            <Textarea
              rowSpan={5}
              bordered
              borderColor={"#000"}
              placeholder="Your Message"
            />
          </Form>
          <Buttons
            title='Send Email'
            block
            light
            clicked={this.state.btnClicked}
            handlePress={() => this.handleClickEvent()}
            textStyle={styles.btnColor}
            textColor={styles.textColor}
          />

        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  mainbc: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  dropView: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
    padding:20
  },
  btnColor: {
    backgroundColor: "$headerColor"
  },

  textColor: {
    color: "#fff"
  }
});
export default Register_complain;
