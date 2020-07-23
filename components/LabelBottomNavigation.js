import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import Give from "../screens/Give";
import Sermons from "../screens/Sermons";
import ImgBackground from "../components/ImgBackground";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function LabelBottomNavigation() {
  const CreatePlaceholder = () => (
    <View style={{ flex: 1, backgroundColor: "blue" }} />
  );
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ImgBackground"
        inactiveColor="#3e2465"
        activeColor="#e91e63"
        style={{ backgroundColor: "tomato" }}
      >
        <Tab.Screen
          name="ImgBackground"
          component={ImgBackground}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Music"
          component={CreatePlaceholder}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
