import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import ImgLoader from "../components/ImgLoader";
import Heading from "../components/Heading";
import Home from "../screens/Home";
import Give from "../screens/Give";
import Sermons from "../screens/Sermons";

const Tab = createMaterialTopTabNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Heading title="Elmhurst SDA" />
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 12 },
          tabStyle: { width: 100 },
          style: { backgroundColor: "powderblue" }
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Give" component={Give} />
        <Tab.Screen name="Sermons" component={Sermons} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
