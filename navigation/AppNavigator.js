import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  TrackListNavigator,
  SignupNavigator,
  Tabnavigator,
} from "./TrackNavigator";
import { useStateValue } from "../context/trackContext";

export default function AppNavigation() {
  const [state] = useStateValue();

  return (
    <NavigationContainer>
      {!state.isSignedIn && <SignupNavigator />}
      {state.isSignedIn && <Tabnavigator />}
    </NavigationContainer>
  );
}
