import "react-native-gesture-handler";
import React from "react";

import { StyleSheet, Text, View } from "react-native";
import HomeStack from "./components/HomeStack";
import LiveBackground from "./components/LiveBackground";
import Quote from "./components/Quote";
import QuoteList from "./components/QuoteList";
export default function App() {
  return (
    <View>
      <QuoteList />
      <LiveBackground />
    </View>
  );
}
