import "react-native-gesture-handler";
import React from "react";

import { StyleSheet, Text, View } from "react-native";
import HomeStack from "./components/HomeStack";
import LiveBackground from "./components/LiveBackground";
import ImgBackground from "./components/ImgBackground";
import Quote from "./components/Quote";
import LabelBottomNavigation from "./components/LabelBottomNavigation";
import Navigation from "./components/Navigation";
import QuoteList from "./components/QuoteList";
import { decode, encode } from "base-64";
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}
export default function App() {
  return <Navigation />;
}
