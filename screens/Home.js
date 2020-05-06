import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Events from "../components/Events";
import { Audio, Video } from "expo-av";
import BackRound from "../backround.mp4";
import DailyQuotes from "../components/DailyQuotes";
function Home() {
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
        <Text style={styles.bigBlue}>
          For God so loved the world that he have his only begotten Son that
          whoever believes in Him shall not parish but have eternal life.
        </Text>
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
export default Home;
