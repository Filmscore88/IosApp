// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
//
// export default ({ navigation }) => (
//   <View
//     style={{
//       flex: 1,
//       backgroundColor: "transparent",
//       alignItems: "center",
//       justifyContent: "center"
//     }}
//   >
//     <TouchableOpacity
//       style={{ backgroundColor: "white", padding: 20 }}
//       onPress={() => navigation.pop()}
//     >
//       <Text>Modal me</Text>
//     </TouchableOpacity>
//   </View>
// );

import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default class Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Modal Screen</Text>
        <Button
          title={"close modal"}
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
