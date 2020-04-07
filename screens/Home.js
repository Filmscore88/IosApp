import React from "react";
import { StyleSheet, View, Text } from "react-native";
import NewsReel from "../components/NewsReel";
import Events from "../components/Events";
function Home() {
  {
    NewsReel();
  }
  return (
    <View>
      <Events />
    </View>
  );
}

export default Home;
