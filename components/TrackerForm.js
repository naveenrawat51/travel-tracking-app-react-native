import React from "react";
import { Input, Button } from "react-native-elements";
import {
  CHANGE_NAME,
  START_RECORDING,
  STOP_RECORDING,
} from "../context/locationContext/location.action";
import { useLocationStateValue } from "../context/locationContext/locationContext";
import useSaveTrack from "../hooks/useSaveTrack";

export default function TrackForm() {
  const [saveTrack] = useSaveTrack();
  const [state, dispatch] = useLocationStateValue();

  return (
    <>
      <Input
        value={state.name}
        onChangeText={(text) => dispatch({ type: CHANGE_NAME, name: text })}
        placeholder="Enter Track Name"
      />
      {state.recording ? (
        <Button
          title="Stop Recording"
          onPress={() => dispatch({ type: STOP_RECORDING })}
        />
      ) : (
        <Button
          title="Start Recording"
          onPress={() => dispatch({ type: START_RECORDING })}
        />
      )}
      {!state.recording && state.locations.length > 0 ? (
        <Button
          style={{ marginVertical: 10 }}
          title="Save Recording"
          onPress={saveTrack}
        />
      ) : null}
    </>
  );
}
