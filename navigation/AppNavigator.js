import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  TrackListNavigator,
  SignupNavigator,
  Tabnavigator,
} from "./TrackNavigator";

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tabnavigator />
      {/* <SignupNavigator />*/}
    </NavigationContainer>
  );
}
