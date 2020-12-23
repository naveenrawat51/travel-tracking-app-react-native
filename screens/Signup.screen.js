import React, { useState, useEffect } from "react";
import Spacer from "../components/Spacer";
import { StyleSheet, View, Alert } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { signup, signin } from "../context/authContext/auth.actions";
import { useAuthStateValue } from "../context/authContext/authContext";
import { CLEAR_ERROR } from "../context/authContext/auth.actions";

export default function SignupScreen() {
  const [state, dispatch] = useAuthStateValue();
  const { errorMessage } = state;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);

  const authHandler = () => {
    if (isSignUp) {
      signup(dispatch, { email, password });
    } else {
      signin(dispatch, { email, password });
    }
  };

  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={styles.heading} h3>
          {`${isSignUp ? "Sign Up" : "Login"}`} for Tracker
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
        <Button title={isSignUp ? "Sign Up" : "Login"} onPress={authHandler} />
      </Spacer>
      <Spacer>
        <Button
          title={`Switch to ${isSignUp ? "Login" : "Sign Up"}`}
          onPress={() => {
            setIsSignUp((prevState) => !prevState);
            dispatch({ type: CLEAR_ERROR });
            setPassword("");
            setEmail("");
          }}
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
