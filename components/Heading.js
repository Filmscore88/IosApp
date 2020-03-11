import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Logo from "../components/Logo";
const Heading = props => {
  return (
    <View style={styles.header}>
      <Logo />
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingTop: 1,
    flexDirection: "column",
    backgroundColor: "#4682b4",
    height: 85,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "400"
  }
});
export default Heading;
