import React, { Component } from "react";
import { getQuotes } from "../src/config";

import { StyleSheet, Text, View } from "react-native";

class QuoteList extends Component {
  constructor() {
    super();

    this.state = {
      quotelist: []
    };
    const self = this;
    onQuotesReceived = quotelist => {
      self.setState(prevState => ({
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
        <Text style={{ color: "blue" }}>THIS IS RENDERING </Text>
        <Text style style={{ color: "blue" }}>
          {this.state.quotelist}
        </Text>
      </View>
    );
  }
}
export default QuoteList;
