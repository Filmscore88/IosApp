import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Audio, Video } from "expo-av";
import BackRound from "../foreststream.mp4";
import Quote from "../components/Quote";
import QuoteList from "../components/QuoteList";

function LiveBackground() {
  const { width } = Dimensions.get("window");

  return (
    <View>
      <Video
        source={BackRound}
        isLooping
        shouldPlay={true}
        resizeMode="cover"
        style={{ width, height: 900 }}
      ></Video>
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
      </View>
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
export default LiveBackground;
