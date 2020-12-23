import React, { useState } from "react";
import AppNavigator from "./navigation/AppNavigator";
import * as Font from "expo-font";
import { LocationProvider } from "./context/locationContext/locationContext";
import AppLoading from "expo-app-loading";
import { AuthProvider } from "./context/authContext/authContext";
import { initialState, reducer } from "./context/authContext/auth.reducer";
import {
  locationInitialState,
  locationReducer,
} from "./context/locationContext/location.reducer";
import { TrackProvider } from "./context/trackContext/trackContext";
import {
  trackInitialState,
  trackReducer,
} from "./context/trackContext/track.action";

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
    <TrackProvider initialState={trackInitialState} reducer={trackReducer}>
      <LocationProvider
        initialState={locationInitialState}
        reducer={locationReducer}
      >
        <AuthProvider initialState={initialState} reducer={reducer}>
          <AppNavigator />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}
