import React, { Component } from "react";
import { getQuotes } from "../src/config";
import Quote from "./Quote";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  AppRegistry,
  ScrollView
} from "react-native";

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
      <View style={styles.container}>
        <Quote items={this.state.quotelist} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  }
});

export default QuoteList;
