import React from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View
} from "react-native";

export default class SearchInpu extends React.Component {
  render() {
    return (
      <TextInput
        autoCorrect={false}
        placeholder="Search any city"
        placeholderTextColor="white"
        style={styles.textInput}
        clearButton="always"
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#666",
    color: "white",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignItems: "center"
  }
});
