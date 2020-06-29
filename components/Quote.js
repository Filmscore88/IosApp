import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Animated,
  Platform,
  Share,
  Linking
} from "react-native";
import PropTypes from "prop-types";
import Carousel from "react-native-snap-carousel";
import { AntDesign } from "@expo/vector-icons";
// import getGalleryImageAsync from "./getGalleryImageAsync";

export default function Quote({ items }) {
  onShare = async () => {
    const { default: exampleImage } = await import("../MountShuksan.mp4");
    const uri = Image.resolveAssetSource(exampleImage).uri;

    Share.share(
      {
        title: "test title",
        url: uri,
        message: " success!!"
      },
      {
        excludedActivityTypes: [
          // 'com.apple.UIKit.activity.PostToWeibo',
          // 'com.apple.UIKit.activity.Print',
          // 'com.apple.UIKit.activity.CopyToPasteboard',
          // 'com.apple.UIKit.activity.AssignToContact',
          // 'com.apple.UIKit.activity.SaveToCameraRoll',
          // 'com.apple.UIKit.activity.AddToReadingList',
          // 'com.apple.UIKit.activity.PostToFlickr',
          // 'com.apple.UIKit.activity.PostToVimeo',
          // 'com.apple.UIKit.activity.PostToTencentWeibo',
          // 'com.apple.UIKit.activity.AirDrop',
          // 'com.apple.UIKit.activity.OpenInIBooks',
          // 'com.apple.UIKit.activity.MarkupAsPDF',
          // 'com.apple.reminders.RemindersEditorExtension',
          // 'com.apple.mobilenotes.SharingExtension',
          // 'com.apple.mobileslideshow.StreamShareService',
          // 'com.linkedin.LinkedIn.ShareExtension',
          // 'pinterest.ShareExtension',
          // 'com.google.GooglePlus.ShareExtension',
          // 'com.tumblr.tumblr.Share-With-Tumblr',
          // 'net.whatsapp.WhatsApp.ShareExtension', //WhatsApp
        ]
      }
    )
      .then(res => console.log(res))
      .catch(error => console.log(error));
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
      <Text onPress={this.onShare}>Share</Text>
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
