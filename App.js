import React, { useState } from "react";
import AppNavigator from "./navigation/AppNavigator";
import * as Font from "expo-font";
import { LocationProvider } from "./context/locationContext";
import AppLoading from "expo-app-loading";
import { TrackProvider } from "./context/trackContext";
import { initialState, reducer } from "./context/reducer";
import {
  locationInitialState,
  locationReducer,
} from "./context/location.reducer";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log(error)}
      />
    );
  }

  return (
    <LocationProvider
      initialState={locationInitialState}
      reducer={locationReducer}
    >
      <TrackProvider initialState={initialState} reducer={reducer}>
        <AppNavigator />
      </TrackProvider>
    </LocationProvider>
  );
}
