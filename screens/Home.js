import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <Text>"Home"</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ebebeb"
  },
  text: {
    paddingTop: 5,
    color: "#fff",
    fontSize: 15,
    fontWeight: "400"
  }
});

export default Home;
