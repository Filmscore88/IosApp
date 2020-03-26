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

const cheerio = require("cheerio");
const request = require("request-promise");
const url = "http://insta.bible/";

function getVerses() {
  request(url, function(err, resp, html) {
    if (!err) {
      const $ = cheerio.load(html);
      console.log(html);
    }
  });
}

getVerses();
// function NewsReel() {
//   let screenWidth = Dimensions.get("window").width;
//
//   return <View></View>;
// }

export default NewsReel;

// () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
//   );
// };
