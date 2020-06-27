import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Animated
} from "react-native";
import PropTypes from "prop-types";
import Carousel from "react-native-snap-carousel";
import { AntDesign } from "@expo/vector-icons";

export default function Quote({ items }) {
  _renderItem = ({ item, index }) => (
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
      <AntDesign
        name={liked && index == counter ? "heart" : "hearto"}
        size={30}
        color="red"
        onPress={() => {
          if (liked == false) {
            setVisible(true);
          }
          setLiked(!liked);
          setCounter(index);
        }}
      />
    </View>
  );

  const { width, height } = Dimensions.get("window");
  const AnimatedIcon = Animated.createAnimatedComponent(AntDesign);
  const currentValue = new Animated.Value(1);
  const [liked, setLiked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [counter, setCounter] = useState(-2);

  useEffect(() => {
    if (liked == true) {
      Animated.spring(currentValue, {
        toValue: 2,
        friction: 2
      }).start(() => {
        Animated.spring(currentValue, {
          toValue: 1
        }).start(() => {
          setVisible(false);
        });
      });
    }
  });
  return (
    <SafeAreaView>
      {visible && (
        <AnimatedIcon
          style={{
            position: "absolute",
            top: 150,
            left: "40%",
            elevation: 4,
            zIndex: 3,
            transform: [{ scale: currentValue }]
          }}
          name="heart"
          size={50}
          color="red"
        />
      )}
      <Carousel
        ref={ref => (this.carousel = ref)}
        data={items}
        sliderWidth={250}
        itemWidth={250}
        renderItem={this._renderItem}
      />
    </SafeAreaView>
  );
}
