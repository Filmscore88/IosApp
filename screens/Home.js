import React from "react";
import { StyleSheet, View, Text } from "react-native";
import NewsReel from "../components/NewsReel";
function Home() {
  return (
    <View>
      <Text>This is the Home Screen where you can scroll the newsreel</Text>

      <NewsReel />
    </View>
  );
}

export default Home;
