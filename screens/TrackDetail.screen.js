import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useTrackStateValue } from "../context/trackContext/trackContext";
import MapView, { Polyline } from "react-native-maps";

export default function TrackDetailScreen({ route }) {
  const [state, dispatch] = useTrackStateValue();
  const _id = route.params._id;
  const selectedTrack = state.allTracks.find((track) => track._id === _id);

  return (
    <View>
      <Text>{selectedTrack.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...selectedTrack.locations[0].coords,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}
      >
        <Polyline
          coordinates={selectedTrack.locations.map((loc) => loc.coords)}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
