import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
// import { Image } from "react-native-remote-svg";
import { Image } from "react-native";

const Heading = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
      <Image
        source={require("../image/logo.png")}
        style={styles.logo}
        resizeMode="stretch"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4682b4",
    height: 85,
    paddingTop: 35
  },
  headerText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  },
  logo: {
    alignSelf: "center",
    height: 90,
    width: 90,
    borderWidth: 1,
    borderRadius: 75
  }
});
export default Heading;
