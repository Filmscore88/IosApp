import React, { Component } from "react";
import { getQuotes } from "../src/config";

import { StyleSheet, Text, View } from "react-native";

class QuoteList extends Component {
  state = {
    quotelist: []
  };

  onQuotesReceived = quotelist => {
    this.setState(prevState => ({
      quotelist: (prevState.quotelist = quotelist)
    }));
  };

  componentDidMount() {
    console.log("component mounted..............");
    getQuotes(this.onQuotesReceived);
  }

  render() {
    return (
      <View>
        <Text>{this.state.quotelist}</Text>
      </View>
    );
  }
}
export default QuoteList;
