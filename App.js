import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeStack from "./components/HomeStack";
import LiveBackground from "./components/LiveBackground";
import Quote from "./components/Quote";

export default function App() {
  return (
    <View>
      <LiveBackground />
    </View>
  );
}
