import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView
} from "react-native";
import PropTypes from "prop-types";
import Carousel from "react-native-snap-carousel";
export default class Quote extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  _renderItem({ item, index }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red", paddingBottom: 30 }}>{item}</Text>
      </View>
    );
  }
  render() {
    const { width, height } = Dimensions.get("window");

    return (
      <SafeAreaView>
        <Carousel
          ref={ref => (this.carousel = ref)}
          data={this.props.items}
          sliderWidth={250}
          itemWidth={250}
          renderItem={this._renderItem}
        />
      </SafeAreaView>
    );
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#131420",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
