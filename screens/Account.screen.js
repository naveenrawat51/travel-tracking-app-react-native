import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Account screen</Text>
    </View>
  );
}

export const AccountScreenOptions = {
  headerTitle: "My Account",
};

const styles = StyleSheet.create({});
