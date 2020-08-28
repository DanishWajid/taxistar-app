import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Item,
  Card,
  CardItem,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Icon,
  Thumbnail
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import PropTypes from 'prop-types';


export default class Datepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      isSecondTimePickerVisible: false,
      dateFrom: "Select Date",
      dateTo: "Select Date"
    };
  }

  // componentWillReceiveProps(nextProps ){
  //    console.log("next props: " , nextProps)
  // }

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <CardItem>
            <Body>
              <View style={styles.searchBody}>
                <View style={styles.searchIconView}>
                  <Icon
                    name="search"
                    style={styles.searchIcon}
                    onPress={this.props.searchPressed}
                  />
                </View>
                <View style={styles.datePickerBody}>
                  <View style={styles.innerBodyOne}>
                    <Text style={styles.rangeText}>From</Text>
                    {/* <Text style={styles.rangeText}>To</Text> */}
                    <TouchableOpacity onPress={this.props._showDateTimePicker}>
                      <View style={{ flexDirection: "row" }}>
                        <Icon name="calendar" style={{ color: "red" }} />
                        <Text style={styles.selectedDate}>
                          {this.props.dateFrom}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.innerBodyTwo}>
                    <Text style={styles.rangeText}>To</Text>
                    <TouchableOpacity onPress={this.props._showSecondDateTimePicker}>
                      <View style={{ flexDirection: "row" }}>
                        <Icon name="calendar" style={{ color: "red" }} />
                        <Text style={styles.selectedDate}>
                        {this.props.dateTo}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Body>
          </CardItem>
        </Card>

        <DateTimePicker
          isVisible={this.props.isDateTimePickerVisible}
          onConfirm={this.props._handleDatePicked}
          maximumDate={new Date()}
          onCancel={this.props._hideDateTimePicker}
        />

        <DateTimePicker
          isVisible={this.props.isSecondTimePickerVisible}
          onConfirm={this.props._handleDatePickedTo}
          maximumDate={new Date()}
          onCancel={this.props._hideSecondDateTimePicker}
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

// Datepicker.propTypes = {
//   dateFrom:PropTypes.string,
//   dateTo:PropTypes.string

// }
