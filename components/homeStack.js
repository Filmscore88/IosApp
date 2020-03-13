import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Heading from "../components/Heading";
import Home from "../screens/Home";
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Heading}
          options={{ header: () => <Heading title="Elmhurst SDA" /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
