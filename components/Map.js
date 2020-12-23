import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { useLocationStateValue } from "../context/locationContext/locationContext";

export default function Map() {
  const [state, dispatch] = useLocationStateValue();
  const { currentLocation } = state;

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  const mapRegion = {
    // latitude: 37.33233,
    // longitude: -122.03121,
    ...currentLocation.coords,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <MapView style={styles.map} initialRegion={mapRegion} region={mapRegion}>
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
      <Polyline coordinates={state.locations.map((loc) => loc.coords)} />
    </MapView>
  );
}

export const MapOptions = {
  headerTitle: "Create Track",
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
