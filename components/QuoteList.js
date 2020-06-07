import React, { Component } from "react";
import { getQuotes } from "../src/config";
import Quote from "./components/Quote";
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
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;

    return (
      <View style={styles.container}>
        <Quote items={this.state.quotelist} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ebebeb"
  }
});

export default QuoteList;
