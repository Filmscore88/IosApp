import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Foundation } from "@expo/vector-icons";
import Give from "../screens/Give";
import Sermons from "../screens/Sermons";
import ImgBackground from "../components/ImgBackground";
import Modal from "../components/Modal";
const CreateNewPlaceholder = () => (
  <View style={{ flex: 1, backgroundColor: "blue" }} />
);

const AppTabs = createBottomTabNavigator();

const AppTabsScreen = ({ navigation }) => (
  <AppTabs.Navigator
    initialRouteName="Home"
    tabBarOptions={{ showLabel: false }}
  >
    <AppTabs.Screen name="Home" component={ImgBackground} />
    <AppTabs.Screen
      name="Themes"
      component={CreateNewPlaceholder}
      options={{
        tabBarIcon: props => (
          <Ionicons name="ios-brush" size={props.size} color={props.color} />
        )
      }}
      listeners={{
        tabPress: e => {
          e.preventDefault();
          navigation.navigate("Modal");
        }
      }}
    />
    <AppTabs.Screen
      name="Music"
      component={CreateNewPlaceholder}
      options={{
        tabBarIcon: props => (
          <Ionicons
            name="ios-musical-note"
            size={props.size}
            color={props.color}
          />
        )
      }}
      listeners={{
        tabPress: e => {
          e.preventDefault();
          navigation.navigate("Modal");
        }
      }}
    />
    <AppTabs.Screen
      name="Categories"
      component={CreateNewPlaceholder}
      options={{
        tabBarIcon: props => (
          <Foundation
            name="comment-quotes"
            size={props.size}
            color={props.color}
          />
        )
      }}
      listeners={{
        tabPress: e => {
          e.preventDefault();
          navigation.navigate("Modal");
        }
      }}
    />
  </AppTabs.Navigator>
);

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
      mode="modal"
    >
      <RootStack.Screen
        name="Tabs"
        component={AppTabsScreen}
        options={{ animationEnabled: true }}
      />
      <RootStack.Screen
        name="Modal"
        component={Modal}
        options={{ animationEnabled: true }}
      />
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
