import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Item, Input,Icon } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';


class Warning extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.warningbc}>
                <Icon name="alert"  style={{color:'#fff'}}/><Text style={styles.offlineText}> You are Offline </Text>
            </View>
         );
    }
}

const styles = EStyleSheet.create({

    warningbc:{
      flexDirection:'row',
      backgroundColor:'$Warningbackground',
      justifyContent:'center',
      alignItems:'center',
      padding:1
},
    offlineText:{
      fontSize:14,
      color:'#fff'
}
    
})
 
export default Warning;