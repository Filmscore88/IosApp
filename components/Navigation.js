import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
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
const AppTabsScreen = ({ navigation }) => (
  <AppTabs.Navigator initialRouteName="Home">
    <AppTabs.Screen name="Home" component={ImgBackground} />
    <AppTabs.Screen
      name="Create"
      component={CreateNewPlaceholder}
      options={{
        tabBarButton: props => (
          <Ionicons
            name="ios-add"
            size={props.size}
            color={props.color}
            onPress={() => {
              // Navigate using the `navigation` prop that you received
              navigation.navigate("CreateNew");
            }}
          />
        )
      }}
    />
  </AppTabs.Navigator>
);

const CreateNew = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "red" }}>
    <Text>Modal Screen</Text>
    <Button title={"close modal"} onPress={() => navigation.goBack()} />
  </View>
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
