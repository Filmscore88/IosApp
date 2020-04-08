import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import Scraper from "../components/Scraper";

class DailyQuotes extends React.Component {
  state = {
    items: []
  };

  async componentDidMount() {
    const verses = await Scraper();
    this.setState({ items: verses });
  }

  render = () => (
    <ScrollView>
      {this.state.items.map((item, index) => (
        <Image
          source={{ uri: item["image"] }}
          key={index}
          style={{ width: 200, height: 200 }}
          resizeMode="stretch"
        />
      ))}
    </ScrollView>
  );
}

export default DailyQuotes;
