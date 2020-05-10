import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Quote = ({ title }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
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
