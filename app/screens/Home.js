import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  H3
} from "native-base";

window.navigator.userAgent = 'react-native';
import io from 'socket.io-client';


import { CustomHeader } from "../components/Header";
import { Warning } from "../components/Warnings";
import { Map } from "../components/GoogleMaps";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width * height;

const longitudeDelta = ASPECT_RATIO * 0.0922;

var initialRegion = {};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: "Go Offline",
      latitude: 33.656475,
      longitude: 73.156473,
      error: null,
      socketId:'f'
    };
  }

  componentWillMount = async() => {
    this.initialData();
  }

  initialData = async()=>{
    await navigator.geolocation.watchPosition(
       position => {
         this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    this.socket = io('http://18.222.240.186:3000',{jsonp:false})

     this.socket.on('connect',()=>{
      alert("this.socket.id")
        this.setState({socketId:this.socket.id},()=>this.updateDriverSocketId(this.state.latitude,this.state.longitude,this.state.socketId))
    })
    
  }

  updateDriverSocketId=async(lat,lng,socketID)=>{
    alert(this.state.longitude)
   await fetch('http://18.222.240.186:3000/driver/5c8a3245c783cc20c0e520e9',{
      method:"PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        coordinates:[lng,lat],
        socketId:socketID
      })
    })
    .then(response=>{
      console.log(response)
    })

    var driverRequest = this.state.socketId + "driverRequest";

    this.socket.on(driverRequest,()=>{
      alert('cusotmr is looking for you');
     })

     
  }

  buttonClicked = () => {
    if (this.state.toggleStatus == "Go Offline") {
      this.setState({ toggleStatus: "Go Online" });
      alert("You will not recieve any ride now");
    } else {
      this.setState({ toggleStatus: "Go Offline" });
    }
  };

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <CustomHeader
          iconName="menu"
          title="Home"
          clicked={this.buttonClicked}
          btnText={this.state.toggleStatus}
          openDrawer={(drawerOpen = () => this.props.navigation.openDrawer())}
        />

        {this.state.toggleStatus == "Go Online" && <Warning />}

        <Map
          initialPosition={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0111,
            longitudeDelta: 0.0001
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Home;
