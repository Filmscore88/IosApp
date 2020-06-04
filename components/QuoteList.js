import React, { Component } from "react";
import { getQuotes } from "../src/config";

import { StyleSheet, Text, View } from "react-native";

class QuoteList extends Component {
  constructor() {
    super();

    this.state = {
      quotelist: []
    };

    onQuotesReceived = quotelist => {
      this.setState(prevState => ({
        quotelist: (prevState.quotelist = quotelist)
      }));
    };
  }

  componentDidMount() {
    getQuotes(onQuotesReceived);
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
