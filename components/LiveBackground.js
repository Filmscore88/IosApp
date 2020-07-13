import React, { useState, useCallback, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Button,
  Share,
  Image,
  SafeAreaView
} from "react-native";
import { Audio, Video } from "expo-av";
import BackRound from "../MountShuksan.mp4";
import Quote from "../components/Quote";
import QuoteList from "../components/QuoteList";
import ViewShot from "react-native-view-shot";
import { captureRef } from "react-native-view-shot";

function LiveBackground() {
  const [source, setSource] = useState(null);
  const viewShotRef = useRef();
  this.myShot = React.createRef();
  const onCapture = useCallback(() => {
    viewShotRef.current.capture().then(uri => setSource({ uri }));
  }, []);
  const { width } = Dimensions.get("window");
  onShare = async () => {
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
  };
  return (
    <ViewShot ref={viewShotRef}>
      <View>
        <Video
          source={BackRound}
          isLooping
          shouldPlay={true}
          resizeMode="cover"
          style={{ width, height: 900 }}
        />

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
          <Image
            ref={this.myShot}
            fadeDuration={0}
            source={source}
            style={{ width: 300, height: 300, paddingTop: 50 }}
          />
          <Text onPress={onCapture} style={{ fontSize: 40 }}>
            Capture
          </Text>
          <Text onPress={onShare} style={{ fontSize: 40 }}>
            SHARE
          </Text>
        </View>
      </View>
    </ViewShot>
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
export default LiveBackground;
