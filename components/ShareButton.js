import React from "react";
import { View, StyleSheet, Share, Button } from "react-native";
import { captureRef } from "react-native-view-shot";

function ShareButton() {
  onShare = async () => {
    const snapShot = await captureRef(this.props.myShot, {
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
    <View>
      <Button title="pressMe">Share</Button>
    </View>
  );
}
export default ShareButton;
