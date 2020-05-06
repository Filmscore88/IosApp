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

const Scraper = async function scrapeRealtor() {
  let num = 0;
  let data = [];
  while (num < 32) {
    const cheerio = require("react-native-cheerio");
    const link = "http://insta.bible/page/" + num.toString();
    const html = await axios.get(link);

    const $ = await cheerio.load(html.data);

    $(".wp-block-image").each((i, elem) => {
      data.push({
        image: $(elem)
          .children()
          .first()
          .attr("src")
      });
    });
    num++;
  }
  return data;
};

export default Scraper;

// () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
//   );
// };
