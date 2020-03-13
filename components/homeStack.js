import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Heading from "../components/Heading";
import Home from "../screens/Home";
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <Heading title="Elmhurst SDA" />,
          headerStyle: { height: 300 }
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
