import React, { Component } from "react";
import { CustomHeader } from "../components/Header";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  refreshControl,
  RefreshControl
} from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  Item,
  ListItem,
  Icon,
  Left,
  Body,
  Button,
  Right,
  Switch,
  Card,
  CardItem
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import { connect } from "react-redux";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import DialogProgress from "react-native-dialog-progress";

import { RidesList } from "../components/Rides";
import rides from "../Data/rides";
import { Datepicker } from "../components/DatePicker";
import { Refresh } from "../components/Refresh";
import { ProgressDialog } from "react-native-simple-dialogs";
var from_date;
var to_date;
var from_moemt;
var to_moment;
const options = {
  message: "Please Wait...",
  isCancelable: true,
  color:'red'
};
class Rides extends Component {
  constructor(state) {
    super(state);
    this.state = {
      isDateTimePickerVisible: false,
      isSecondTimePickerVisible: false,
      dateFrom: "Select Date",
      dateTo: "Select Date",
      refreshing: false
    };
  }

  componentWillMount = () => {
    DialogProgress.show(options)
    rides.map((element, index) => {
      console.log(element.Fare);
    });
  };

  //component did mount

  componentDidMount = () => {
    DialogProgress.hide();
  };
  _showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  _showSecondDateTimePicker = () =>
    this.setState({ isSecondTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _hideSecondDateTimePicker = () =>
    this.setState({ isSecondTimePickerVisible: false });

  //handel from Date
  _handleDatePicked = date => {
    from_date = moment(date).format("YYYY-MM-DD");
    from_moemt = moment(date);
    this.setState({ dateFrom: from_date });
    this._hideDateTimePicker();
  };
  //handle To Date
  _handleDatePickedTo = date => {
    to_date = moment(date).format("YYYY-MM-DD");
    to_moment = moment(date);
    this.setState({ dateTo: to_date });
    this._hideSecondDateTimePicker();
  };

  //Handle search

  searchPressed = () => {
    if (from_moemt.diff(to_moment, "days") > 0) {
      alert("date is wrong");
    }
  };

  //Fetching all latest rides

  fetchData = async () => {
    alert("New Data fetched");
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  };

  render() {
    return (
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <CustomHeader
          iconName="menu"
          title="Rides"
          openDrawer={(drawerOpen = () => this.props.navigation.openDrawer())}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <View>
            <Card>
              <CardItem>
                <Body>
                  <View style={styles.searchBody}>
                    <View style={styles.searchIconView}>
                      <Icon
                        name="search"
                        style={styles.searchIcon}
                        onPress={this.searchPressed}
                      />
                    </View>
                    <View style={styles.datePickerBody}>
                      <View style={styles.innerBodyOne}>
                        <Text style={styles.rangeText}>From</Text>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                          <View style={{ flexDirection: "row" }}>
                            <Icon name="calendar" style={{ color: "#1d347f" }} />
                            <Text style={styles.selectedDate}>
                              {this.state.dateFrom}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.innerBodyTwo}>
                        <Text style={styles.rangeText}>To</Text>
                        <TouchableOpacity
                          onPress={this._showSecondDateTimePicker}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Icon name="calendar" style={{ color: "#1d347f" }} />
                            <Text style={styles.selectedDate}>
                              {this.state.dateTo}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
            {rides.map((element, index) => (
              <RidesList
                key={index}
                Fare={element.Fare}
                Time={element.Time}
                Date={element.Date}
                Pickup={element["Pickup address"]}
                Destination={element.Destination}
              />
            ))}
          </View>
        </ScrollView>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          maximumDate={new Date()}
          onCancel={this._hideDateTimePicker}
        />

        <DateTimePicker
          isVisible={this.state.isSecondTimePickerVisible}
          onConfirm={this._handleDatePickedTo}
          maximumDate={new Date()}
          onCancel={this._hideSecondDateTimePicker}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 3
  },
  searchBody: {
    flexDirection: "row"
  },
  searchIconView: {
    borderRightColor: "#cecece",
    borderRightWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  searchIcon: {
    color: "$RideDateColor",
    paddingRight: 15
  },
  datePickerBody: {
    flex: 6,
    flexDirection: "row",
    paddingLeft: "3%"
  },
  innerBodyOne: {
    flex: 3,
    flexDirection: "column",
    marginBottom: 5
  },
  innerBodyTwo: {
    flex: 3,
    flexDirection: "column"
  },
  selectedDate: {
    marginTop: 2,
    marginLeft: 5
  },
  rangeText: {
    color: "$RideDateColor"
  }
});

export default Rides;
