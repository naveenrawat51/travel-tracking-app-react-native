import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {} from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Colors from "../constant/Colors";

import AccountScreen, { AccountScreenOptions } from "../screens/Account.screen";
import CreateTrackScreen, {
  CreateTrackScreenOptions,
} from "../screens/CreateTrack.screen";
import SigninScreen from "../screens/Signin.screen";
import SignupScreen, { SignupScreenOptions } from "../screens/Signup.screen";
import TrackDetailScreen from "../screens/TrackDetail.screen";
import TrackListScreen, {
  TrackListScreenOptions,
} from "../screens/TrackList.screen";
import { Ionicons } from "@expo/vector-icons";
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
      <SignupStackNavigator.Screen
        name="signup"
        component={SignupScreen}
        options={SignupScreenOptions}
      />
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
        options={TrackListScreenOptions}
      />
      <TrackListStackNavigator.Screen
        name="trackDetail"
        component={TrackDetailScreen}
      />
    </TrackListStackNavigator.Navigator>
  );
};

const AccountStackNavigator = createStackNavigator();
export const AccountNavigator = () => {
  return (
    <AccountStackNavigator.Navigator screenOptions={defaultNavOption}>
      <AccountStackNavigator.Screen
        name="account"
        component={AccountScreen}
        options={AccountScreenOptions}
      />
    </AccountStackNavigator.Navigator>
  );
};

const CreateTrackStackNavigator = createStackNavigator();
export const CreateTrackNavigator = () => {
  return (
    <CreateTrackStackNavigator.Navigator screenOptions={defaultNavOption}>
      <CreateTrackStackNavigator.Screen
        name="createTrack"
        component={CreateTrackScreen}
        options={CreateTrackScreenOptions}
      />
    </CreateTrackStackNavigator.Navigator>
  );
};

const TabBottomNavigator = createBottomTabNavigator();
export const Tabnavigator = () => {
  return (
    <TabBottomNavigator.Navigator
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "trackList") {
            iconName = focused ? "ios-list" : "ios-list";
          } else if (route.name === "createTrack") {
            iconName = focused ? "ios-add" : "ios-add";
          } else if (route.name === "account") {
            iconName = focused ? "ios-settings" : "ios-settings";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <TabBottomNavigator.Screen
        name="trackList"
        component={TrackListNavigator}
      />
      <TabBottomNavigator.Screen
        name="createTrack"
        component={CreateTrackNavigator}
      />
      <TabBottomNavigator.Screen name="account" component={AccountNavigator} />
    </TabBottomNavigator.Navigator>
  );
};
