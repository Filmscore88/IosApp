import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Heading = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#c0392b",
    height: 56,
    paddingTop: 35
  },
  headerText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  }
});
export default Heading;
