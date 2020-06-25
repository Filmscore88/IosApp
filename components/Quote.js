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
import { AntDesign } from "@expo/vector-icons";

export default class Quote extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontFamily: "Verdana-BoldItalic"
          }}
        >
          {item}
        </Text>
        <AntDesign name="hearto" size={30} color="red" />
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
