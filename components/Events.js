import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  FlatList
} from "react-native";

const { width } = Dimensions.get("window");

renderRow = ({ item }) => {
  return (
    <View style={styles.itemRow}>
      <Image source={item.thumbnailUrl} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
};
const Events = () => {
  const [events, setData] = useState([
    {
      name: "Financial Peace University Class",
      date: "04/26/2020",
      thumbnailUrl: require("../image/elmhurstimages.jpg"),
      url: "https://www.facebook.com/events/2756400367760226/"
    },
    {
      name: "Free Weight Loss Class",
      date: "04/26/2020",
      thumbnailUrl: require("../image/weightloss.jpg"),
      url: "https://www.facebook.com/events/865284773919966/"
    }
  ]);

  return (
    <FlatList
      style={styles.contaner}
      data={events}
      renderItem={this.renderRow}
      keyExtractor={(item, index) => index.toString()}
      onReachedThreshold={0}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#f5fcff"
  },
  itemRow: {
    borderBottomColor: "#ccc",
    marginBottom: 10,
    borderBottomWidth: 1
  },
  itemText: {
    fontSize: 16,
    padding: 5
  },
  itemImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },
  loader: {
    marginTop: 10,
    alignItems: "center"
  }
});
export default Events;

//
// <ScrollView
//   style={{flex: 1}}
//   contentContainerStyle={{width: '100%', alignItems: 'center'}}>
//
// {this.state.test.map((item, index) => {
//   <View style={{height: 50, width: 50, backgroundColor: 'orange', marginBottom: 10}} />
// })}
//
//   <SomeOtherComponent />
// </ScrollView>
//
// ---------------------------------------------------------------------------------
// const { width } = Dimensions.get('window');
//
// export default class App extends Component {
//
//   componentDidMount() {
// 		setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
// 	}
//
//   render() {
//     return (
// <ScrollView
//   ref={(scrollView) => { this.scrollView = scrollView; }}
//   style={styles.container}
//   //pagingEnabled={true}
//   horizontal= {true}
//   decelerationRate={0}
//   snapToInterval={width - 60}
//   snapToAlignment={"center"}
//   contentInset={{
//     top: 0,
//     left: 30,
//     bottom: 0,
//     right: 30,
//   }}>
//   <View style={styles.view} />
//   <View style={styles.view2} />
//   <View style={styles.view} />
//   <View style={styles.view2} />
//   <View style={styles.view} />
// </ScrollView>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {},
//   view: {
//     marginTop: 100,
//     backgroundColor: 'blue',
//     width: width - 80,
//     margin: 10,
//     height: 200,
//     borderRadius: 10,
//     //paddingHorizontal : 30
//   },
//   view2: {
//     marginTop: 100,
//     backgroundColor: 'red',
//     width: width - 80,
//     margin: 10,
//     height: 200,
//     borderRadius: 10,
//     //paddingHorizontal : 30
//   },
// });
//
