import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default class Screen extends React.Component {
  render() {
    return (
      <View>
        <Text>Modal Screen</Text>
        <Button
          title={"close modal"}
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
