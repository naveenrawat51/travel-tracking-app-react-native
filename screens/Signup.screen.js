import React, { useState, useEffect } from "react";
import Spacer from "../components/Spacer";
import { StyleSheet, View, Alert } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { signup } from "../context/actions";
import { useStateValue } from "../context/trackContext";

export default function SignupScreen() {
  const [state, dispatch] = useStateValue();
  const { errorMessage } = state;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={styles.heading} h3>
          Sign Up for Tracker
        </Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => signup(dispatch, { email, password })}
        />
      </Spacer>
    </View>
  );
}

export const SignupScreenOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  errorMessage: {
    color: "red",
    marginHorizontal: 10,
    fontFamily: "open-sans",
  },
  heading: {
    fontFamily: "open-sans-bold",
  },
});
