import React, { Component } from "react";
import { getQuotes } from "../src/config";

import { StyleSheet, Text, View } from "react-native";

class QuoteList extends Component {
  state = {
    quoteList: []
  };

  onQuotesReceived = quoteList => {
    console.log("Test");
    this.setState(prevState => ({
      quoteList: (prevState.quoteList = quoteList)
    }));
  };

  componentDidMount() {
    console.log("This component did mount works>>>>>>>>>>>>>>>>");

    getQuotes(this.onQuotesReceived);
  }

  render() {
    return (
      <View>
        <Text>{this.state.quoteList}</Text>
      </View>
    );
  }
}
export default QuoteList;
