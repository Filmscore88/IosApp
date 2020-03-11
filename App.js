import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Heading from "./components/Heading";
import Logo from "./components/Logo";
export default function App() {
  return (
    <View style={styles.heading}>
      <Heading title="Elmhurst SDA " />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    paddingTop: 30
  }
});
