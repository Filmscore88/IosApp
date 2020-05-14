import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import Heading from "../components/Heading";
import Give from "../screens/Give";
import Sermons from "../screens/Sermons";

const Tab = createMaterialTopTabNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Tab.Screen name="Give" component={Give} />
      <Tab.Screen name="Sermons" component={Sermons} />
    </NavigationContainer>
  );
}

export default HomeStack;
