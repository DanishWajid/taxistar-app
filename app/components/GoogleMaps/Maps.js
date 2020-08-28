import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions,Image } from "react-native";
import { Container, Header, Content, Button, Text, Item,Thumbnail } from "native-base";
import MapView, { Marker, PROVIDER_GOOGLE, Overlay } from "react-native-maps";
import EStyleSheet from "react-native-extended-stylesheet";
import Icon from "react-native-vector-icons/FontAwesome";

import { Buttons } from "../../components/button";
import { RoundButton } from "../../components/Round";

export default class Map extends React.Component {
  static propTypes = {
    // initialPosition: PropTypes.obj,
  };
  constructor(props) {
    super(props);
    this.state = {
      textStatus: "Go Offline",
      backgroundColor: "#fff"
    };
  }

  btnClicked = () => {
    if (this.state.textStatus == "Go Online") {
      this.setState({ textStatus: "Go Offline" });
      this.setState({ backgroundColor: "white" });
    } else {
      this.setState({ textStatus: "Go Online" });
      this.setState({ backgroundColor: "red" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={this.props.initialPosition}
          showsUserLocation={true}
          loadingEnabled
          followsUserLocation={true}
          showsTraffic={true}
          zoomEnabled
          zoomControlEnabled
          showsUserLocation={true}
          showScale={true}
          showsIndoors={true}
          showsPointsOfInterest={true}
          showsBuildings={true}
          showCompassOnRotate={true}
          rotateEnabled={true}
        >
          {/* <Marker coordinate={this.props.initialPosition}>
            <Image source={require('../../assets/gifs/currentloc.png')} style={{width:40}} resizeMode="contain"/>
          </Marker> */}
        </MapView>

        <View style={styles.topRow}>
          <View style={styles.bottomIcon1} />
          <View style={styles.priveView}>
             <Text style={styles.priceText}>$ 130.00 </Text>
          </View>
          <View style={styles.drivePicView}>
           <Thumbnail source={require('../../assets/drawer_images/nomi.jpg')}/>
          </View>
        </View>

        <View style={styles.bottomRow}>
          <View style={styles.bottomIcon1}>
            <Icon name="shield" size={40} style={{ color: "#1d347f" }} />
          </View>
          <View style={styles.bottomIcon}>
            <RoundButton
              btnClicked={() => this.btnClicked()}
              toggleBtn={this.state.textStatus}
              backgroundColor={this.state.backgroundColor}
            />
          </View>
          <View style={styles.bottomIcon1}>
            <Icon name="compass" size={30} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end"
  },

  bottomRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  bottomIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomIcon1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  topRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  priveView:{
    marginTop:5
  },
  priceText:{
    padding:10,
    backgroundColor:'#000',
    color:'#fff',
    borderRadius:5
  },
  drivePicView: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 20
  },

});
