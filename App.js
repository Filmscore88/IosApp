import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Heading from "./components/Heading";
import Logo from "./components/Logo";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.heading}>
        <Heading title="Elmhurst SDA " />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  heading: {
    paddingTop: 30
  }
});
