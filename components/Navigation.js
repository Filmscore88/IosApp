import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Give from "../screens/Give";
import Sermons from "../screens/Sermons";
import ImgBackground from "../components/ImgBackground";
import Modal from "../components/Modal";
const CreatePlaceholder = () => (
  <View style={{ flex: 1, backgroundColor: "blue" }} />
);
const AppTabs = createBottomTabNavigator();

const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen
      name="Quotes"
      component={ImgBackground}
      options={{
        tabBarIcon: props => (
          <Ionicons name="ios-contacts" size={props.size} color={props.color} />
        )
      }}
    />
    <AppTabs.Screen
      name="Create"
      component={CreateNew}
      options={{
        tabBarIcon: props => (
          <Ionicons name="ios-add" size={props.size} color={props.color} />
        )
      }}
      listeners={({ navigation }) => ({
        tabPress: e => {
          e.preventDefault();
          navigation.navigate("CreateNew");
        }
      })}
    />
    <AppTabs.Screen
      name="Give"
      component={Give}
      options={{
        tabBarIcon: props => (
          <Ionicons
            name="ios-checkmark-circle-outline"
            size={props.size}
            color={props.color}
          />
        )
      }}
    />
  </AppTabs.Navigator>
);

const RootStack = createStackNavigator();
const CreateNew = () => <View style={{ flex: 1, backgroundColor: "red" }} />;

const RootStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      setUser({});
    }, 500);
  }, []);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
      mode="modal"
    >
      <RootStack.Screen
        name="Home"
        component={AppTabsScreen}
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
