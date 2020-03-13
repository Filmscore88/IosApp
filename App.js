import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeStack from "./components/HomeStack";

export default function App() {
  return (
    <View style={styles.heading}>
      <HomeStack />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    paddingTop: 30
  }
});
