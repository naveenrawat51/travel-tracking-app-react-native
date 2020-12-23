//import '../mockLocations';
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { ADD_LOCATION } from "../context/location.action";
import { useLocationStateValue } from "../context/locationContext";
import useLocation from "../hooks/useLocation";

export default function CreateTrackScreen({ navigation }) {
  const [isFocused, setFocused] = useState(navigation.isFocused());
  const [state, dispatch] = useLocationStateValue();
  const [err] = useLocation(
    (location) => dispatch({ type: ADD_LOCATION, location: location }),
    isFocused
  );

  useEffect(() => {
    const didBlur = () => setFocused(false);
    const didFocus = () => setFocused(true);

    const blurSubscription = navigation.addListener("blur", didBlur);
    const focusSubscription = navigation.addListener("focus", didFocus);

    return () => {
      blurSubscription.remove();
      focusSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h4>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
}

export const CreateTrackScreenOptions = {
  headerTitle: "Create Track",
};

const styles = StyleSheet.create({});
