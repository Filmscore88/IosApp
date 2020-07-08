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
import Image1 from "../treeLights.jpg";
import QuoteList from "../components/QuoteList";
import ViewShot from "react-native-view-shot";

function ImageBackground() {
  const [source, setSource] = useState(null);
  const dimension = { width: 300, height: 300 };

  const onCapture = useCallback(uri => setSource({ uri }), []);
  const { width } = Dimensions.get("window");

  return (
    <ViewShot captureMode="update" onCapture={onCapture}>
      <View>
        <Image
          source={Image1}
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
          <QuoteList />
          <Image fadeDuration={0} source={source} style={dimension} />
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
export default ImageBackground;
