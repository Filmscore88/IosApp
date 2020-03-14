import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions
} from "react-native";

function Events() {
  let screenWidth = Dimensions.get("window").width;

  return (
    <View>
      <ScrollView horizontal="true">
        <Image
          style={{ width: 300, height: 300 }}
          source={require("../image/Biomimicry.jpg")}
        />
      </ScrollView>
    </View>
  );
}

export default Events;
