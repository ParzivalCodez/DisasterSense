import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); // Create a Stack Navigator

import LoginScreen from "./source/screens/onboarding/Login";
import DashboardScreen from "./source/screens/main/Dashboard";
import RelativeTrackingScreen from "./source/screens/main/RelativeTracking";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen
          name="RelativeTrackingScreen"
          component={RelativeTrackingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
