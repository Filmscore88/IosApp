import React from "react";
import { View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Give from "../screens/Give";
import Sermons from "../screens/Sermons";
import ImgBackground from "../components/ImgBackground";
import Modal from "../components/Modal";
const CreateNewPlaceholder = () => (
  <View style={{ flex: 1, backgroundColor: "blue" }} />
);
const AppTabs = createBottomTabNavigator();
function MyTabBar({ navigation }) {
  return (
    <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate("CreateNew");
      }}
    />
  );
}
const AppTabsScreen = () => {
  return (
    <AppTabs.Navigator
      initialRouteName="Home"
      tabBar={props => <MyTabBar {...props} />}
    >
      <AppTabs.Screen
        name="Home"
        component={ImgBackground}
        options={{
          tabBarIcon: props => (
            <Ionicons name="ios-add" size={props.size} color={props.color} />
          )
        }}
      />
    </AppTabs.Navigator>
  );
};

const RootStack = createStackNavigator();
const CreateNew = () => <View style={{ flex: 1, backgroundColor: "red" }} />;

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
        name="CreateNew"
        component={CreateNew}
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
