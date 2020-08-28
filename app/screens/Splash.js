import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Alert
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import { connect } from "react-redux";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressWithOnComplete: 0,
      clearIntervel: ""
    };
  }


  componentDidMount = () => {
    this.setState({
      clearIntervel: setInterval(() => {
        this.setState({
          progressWithOnComplete: this.state.progressWithOnComplete + 25
        });
      }, 2000)
    });
  };

  progressCompleted = () => {
    clearInterval(this.state.clearIntervel);
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate("AppPage");
    } else {
      this.props.navigation.navigate("Login");
    }
  };
  render() {
    const barWidth = Dimensions.get("screen").width - 30;
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <ImageBackground
          source={require("../assets/Splash3.jpg")}
          style={styles.BackgroundImage}
        >
          <View style={styles.progressBar}>
            <ProgressBarAnimated
              backgroundColor="#00BADE"
              width={barWidth}
              height={5}
              value={this.state.progressWithOnComplete}
              onComplete={() => this.progressCompleted()}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  BackgroundImage: {
    width: "100%",
    height: "100%"
  },

  progressBar: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center"
  }
});

const mapStateToProps = state => {
  const userData = state.login.userData;
  const isLoggedIn = state.login.isLoggedIn;
  return {
    userData,
    isLoggedIn
  };
};

export default connect(mapStateToProps)(Splash);
