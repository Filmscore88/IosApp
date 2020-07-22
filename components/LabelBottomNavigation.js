import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import Give from "../screens/Give";
import Sermons from "../screens/Sermons";
import ImgBackground from "../components/ImgBackground";
const Tab = createMaterialBottomTabNavigator();

export default function LabelBottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{ backgroundColor: "#694fad" }}
        initialRouteName="Feed"
        inactiveColor="#3e2465"
        activeColor="#e91e63"
        style={{ backgroundColor: "tomato" }}
      >
        <Tab.Screen
          name="Categories"
          component={ImgBackground}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Music"
          component={Sermons}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
