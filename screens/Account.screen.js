import React from "react";
import { StyleSheet, SafeAreaView, View, AsyncStorage } from "react-native";
import { Button } from "react-native-elements";
import { LOGOUT } from "../context/actions";
import { useStateValue } from "../context/trackContext";
import Spacer from "../components/Spacer";

export default function AccountScreen() {
  const [state, dispatch] = useStateValue();

  const logoutHandler = async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: LOGOUT });
  };
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Button title="log out" onPress={logoutHandler} />
      </Spacer>
    </SafeAreaView>
  );
}

export const AccountScreenOptions = {
  headerTitle: "My Account",
};

const styles = StyleSheet.create({});
