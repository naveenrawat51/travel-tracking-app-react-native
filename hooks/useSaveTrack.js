import { useLocationStateValue } from "../context/locationContext/locationContext";
import { createTrack } from "../context/trackContext/track.action";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const [state, locationDispatch] = useLocationStateValue();

  const saveTrack = () => {
    createTrack(locationDispatch, state.name, state.locations);
    navigation.navigate("trackList");
  };

  return [saveTrack];
};
