import React from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View
} from "react-native";

import SearchInput from "./components/SearchInput";

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.city}>Ottawa</Text>
        <Text style={styles.weather}>Sunny</Text>
        <Text style={styles.temperature}>24c</Text>

        <SearchInput />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  city: {
    textAlign: "center",
    fontSize: 44,
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto"
  },
  weather: {
    fontSize: 18
  },
  temperature: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto"
  },
  smallText: {
    fontSize: 18
  }
});
