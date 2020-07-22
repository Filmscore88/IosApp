import React, { useState, useCallback, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Button,
  Share,
  Image,
  SafeAreaView,
  ImageBackground
} from "react-native";

import { Audio, Video } from "expo-av";
import Image1 from "../treeLights.jpg";
import QuoteList from "../components/QuoteList";
import ViewShot from "react-native-view-shot";
import { captureRef } from "react-native-view-shot";

function ImgBackground() {
  this.myShot = React.createRef();
  const [source, setSource] = useState(null);
  const dimension = { width: 300, height: 300 };
  const [visible, setVisible] = useState(true);

  onCapture = async () => {
    await setVisible(false);

    const snapShot = await captureRef(this.myShot, {
      result: "data-uri"
    });

    Share.share(
      {
        title: "test title",
        url: snapShot,
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
    setVisible(true);
  };
  const { width } = Dimensions.get("window");

  return (
    <View ref={this.myShot}>
      <ImageBackground
        source={Image1}
        resizeMode="cover"
        style={{ width, height: 900 }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image source={source} style={dimension} />
          <QuoteList iconVisible={visible} grandparentMethod={this.onCapture} />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  }
});
export default ImgBackground;
