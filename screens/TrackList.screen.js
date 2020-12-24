import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getTracks } from "../context/trackContext/track.action";
import { useTrackStateValue } from "../context/trackContext/trackContext";
import { ListItem } from "react-native-elements";

export default function TrackListScreen({ navigation }) {
  const [state, dispatch] = useTrackStateValue();

  useEffect(() => {
    navigation.addListener("focus", () => {
      getTracks(dispatch);
    });
  }, []);

  return (
    <View>
      <FlatList
        data={state.allTracks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("trackDetail", { _id: item._id })
            }
          >
            <ListItem ket={item._id} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export const TrackListScreenOptions = {
  headerTitle: "All Track List",
};

const styles = StyleSheet.create({});
