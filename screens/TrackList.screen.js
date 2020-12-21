import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function TrackListScreen({ navigation }) {
  return (
    <View>
      <Text>Track List screen</Text>
      <Button
        title="Track Details"
        onPress={() => navigation.navigate("trackDetail")}
      />
    </View>
  );
}

export const TrackListScreenOptions = {
  headerTitle: "All Track List",
};

const styles = StyleSheet.create({});
