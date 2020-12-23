//import '../mockLocations';
import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import {
  ADD_CURRENT_LOCATION,
  ADD_LOCATION,
} from "../context/locationContext/location.action";
import { useLocationStateValue } from "../context/locationContext/locationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackerForm";

let i = 1;
export default function CreateTrackScreen({ navigation }) {
  const [isFocused, setFocused] = useState(navigation.isFocused());
  const [state, dispatch] = useLocationStateValue();

  const callback = useCallback(
    (location) => {
      dispatch({ type: ADD_CURRENT_LOCATION, location: location });
      if (state.recording) {
        dispatch({ type: ADD_LOCATION, location: location });
      }
    },
    [state.recording]
  );

  const [err] = useLocation(callback, isFocused || state.recording);

  useEffect(() => {
    const didBlur = () => setFocused(false);
    const didFocus = () => setFocused(true);

    const blurSubscription = navigation.addListener("blur", didBlur);
    const focusSubscription = navigation.addListener("focus", didFocus);

    // return () => {
    //   blurSubscription ? blurSubscription.remove() : null;
    //   focusSubscription ? focusSubscription.remove() : null;
    // };
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      {/* <Text style={{alignSelf: "center"}} h4>Create a Track</Text> */}
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <View style={styles.form}>
        <TrackForm />
      </View>
    </SafeAreaView>
  );
}

export const CreateTrackScreenOptions = {
  headerTitle: "Create Track",
};

const styles = StyleSheet.create({
  form: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
});
