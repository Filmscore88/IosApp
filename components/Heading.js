import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Heading = props => {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingTitle}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    padding: 16
  },
  headingTitle: {
    color: "#E20354",
    fontWeight: "bold"
  }
});
export default Heading;
