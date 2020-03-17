import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  FlatList
} from "react-native";

function Events() {
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
}

export default Events;
