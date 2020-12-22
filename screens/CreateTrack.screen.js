import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";

export default function CreateTrackScreen() {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h4>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
}

export const CreateTrackScreenOptions = {
  headerTitle: "Create Track",
};

const styles = StyleSheet.create({});
