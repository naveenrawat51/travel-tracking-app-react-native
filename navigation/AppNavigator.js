import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SignupNavigator, Tabnavigator } from "./TrackNavigator";
import { useStateValue } from "../context/trackContext";
import StartupScreen from "../screens/Startup.screen";

export default function AppNavigation() {
  const [state] = useStateValue();
  const { token, didTryAutoLogin } = state;

  return (
    <NavigationContainer>
      {/* <Tabnavigator /> */}
      {token && <Tabnavigator />}
      {!token && didTryAutoLogin && <SignupNavigator />}
      {!token && !didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
}
