import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import Colors from "../constant/Colors";
import { useStateValue } from "../context/trackContext";
import { tryLocalSignin, SET_DID_TRY_AL } from "../context/actions";

export default function StartupScreen({ navigation }) {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const tryLogin = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        dispatch({ type: SET_DID_TRY_AL });
        return;
      } else {
        tryLocalSignin(dispatch);
      }
    };

    tryLogin();
  }, []);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
