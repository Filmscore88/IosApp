import React from "react";
import { StyleSheet, View, Text } from "react-native";
import NewsReel from "../components/NewsReel";
import Events from "../components/Events";
function Home() {
  return (
    <View>
      <Text>This is the Home Screen where you can scroll the newsreel</Text>

      <Events />
    </View>
  );
}

export default Home;
