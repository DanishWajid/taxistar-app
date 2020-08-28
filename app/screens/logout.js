import React, { Component } from 'react';
import { logoutUser } from '../actions/Login';
import {connect} from 'react-redux';
import {Platform, StyleSheet, View,TouchableOpacity, ImageBackground,Dimensions,Alert,Image } from 'react-native';


class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillMount=()=>{
        this.props.dispatch(logoutUser());
        console.log(this.props.dispatch(logoutUser()));
        this.props.navigation.navigate("Splash",{onGoBack:() => this.refresh()});
    }
    render() { 
        return ( 
            <View>
            </View>
         );
    }
}

 
export default connect()(Logout);