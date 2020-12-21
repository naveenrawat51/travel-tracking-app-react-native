import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {} from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Colors from "../constant/Colors";

import AccountScreen from "../screens/Account.screen";
import CreateTrackScreen from "../screens/CreateTrack.screen";
import SigninScreen from "../screens/Signin.screen";
import SignupScreen from "../screens/Signup.screen";
import TrackDetailScreen from "../screens/TrackDetail.screen";
import TrackListScreen from "../screens/TrackList.screen";

const defaultNavOption = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const SignupStackNavigator = createStackNavigator();
export const SignupNavigator = () => {
  return (
    <SignupStackNavigator.Navigator screenOptions={defaultNavOption}>
      <SignupStackNavigator.Screen name="signup" component={SignupScreen} />
      <SignupStackNavigator.Screen name="signin" component={SigninScreen} />
    </SignupStackNavigator.Navigator>
  );
};

const TrackListStackNavigator = createStackNavigator();
export const TrackListNavigator = () => {
  return (
    <TrackListStackNavigator.Navigator screenOptions={defaultNavOption}>
      <TrackListStackNavigator.Screen
        name="trackList"
        component={TrackListScreen}
      />
      <TrackListStackNavigator.Screen
        name="trackDetail"
        component={TrackDetailScreen}
      />
    </TrackListStackNavigator.Navigator>
  );
};

const TabBottomNavigator = createBottomTabNavigator();
export const Tabnavigator = () => {
  return (
    <TabBottomNavigator.Navigator>
      <TabBottomNavigator.Screen
        name="trackList"
        component={TrackListNavigator}
      />
      <TabBottomNavigator.Screen
        name="createTrack"
        component={CreateTrackScreen}
      />
      <TabBottomNavigator.Screen name="account" component={AccountScreen} />
    </TabBottomNavigator.Navigator>
  );
};
