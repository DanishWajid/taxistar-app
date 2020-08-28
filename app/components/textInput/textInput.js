import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Item, Input } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';


class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        bc=this.props.borderColor;
        return ( 
            <View style={styles.container}>     
              <Item {...this.props} style={[styles.customText,{borderColor:bc}]}>
                <Input placeholder={this.props.placeholder}
                   placeholderTextColor={this.props.placeholderColor} 
                   secureTextEntry={this.props.secureTextEntry} 
                   returnKeyType={this.props.returnType}
                   keyboardType={this.props.keyboardType}
                   onChangeText={this.props.textChanged}
                   onSubmitEditing={this.props.submitEditing}
                   getRef={this.props.reference}
                   />
              </Item>
            </View>
         );
    }
}

const styles = EStyleSheet.create({

container:{
      marginTop:30,
},
customText: {
    width:"100%",

},
    
})
 
export default InputText;