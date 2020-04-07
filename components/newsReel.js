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
import axios from "axios";
const cheerio = require("react-native-cheerio");

const NewsReel = async function scrapeRealtor() {
  const html = await axios.get("http://insta.bible/");

  const $ = await cheerio.load(html.data);

  let data = [];
  $(".wp-block-image").each((i, elem) => {
    data.push({
      image: $(elem)
        .children()
        .first()
        .attr("src")
    });
  });

  console.log(data);
};
export default NewsReel;

// () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
//   );
// };
