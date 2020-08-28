import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Item,
  Spinner
} from "native-base";

let handle_final;
export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: [],
      fontLoaded: false,
      btnText:'ok ',
      loadSpinner:false
    };
  }

  componentWillReceiveProps(nextProps ){
    if(this.props.clicked !== this.nextProps){
    this.setState({loadSpinner:true})
    }
    else{
      this.setState({loadSpinner:false})
    }
  }

  render() {

    let initText = <Text style={{ ...this.props.textColor }}>{this.props.title}</Text>;
    let spinner = <Spinner />

    if(this.state.loadSpinner){
      handle_final=spinner;
    }
    else{
      handle_final=initText
    }
    return (
      <View style={{ width: "100%", marginTop: 30 }}>
        <Button
          style={{ ...this.props.textStyle }}
          {...this.props}
          onPress={this.props.handlePress}
        >
          {/* <Text style={{ ...this.props.textColor }}>{this.state.btnText}</Text> */}
          {handle_final}
        </Button>
      </View>
    );
  }

  static defaultProps = {
    handlePress: function() {}
  };
}
