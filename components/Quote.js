import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  Card,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Animated,
  Platform,
  Share,
  Linking
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function Quote({ items, iconVisible, parentMethod }) {
  shareQuote = () => {
    parentMethod();
  };
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
      {iconVisible && (
        <View
          style={{
            flexDirection: "row",
            paddingTop: 100,
            padding: 50
          }}
        >
          <AntDesign
            name={liked && index == counter ? "heart" : "hearto"}
            size={30}
            color="white"
            onPress={() => {
              if (liked == false) {
                setVisible(true);
              }
              setLiked(!liked);
              setCounter(index);
            }}
            style={{
              flex: 1
            }}
          />

          <Entypo
            name="share-alternative"
            size={30}
            color="white"
            onPress={this.shareQuote}
          />
        </View>
      )}
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
          color="white"
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
