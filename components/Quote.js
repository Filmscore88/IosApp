import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Quote = ({ text }) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 35
  }
});

export default Quote;
