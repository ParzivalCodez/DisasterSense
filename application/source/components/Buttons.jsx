import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";

function ButtonPrimary(props) {
  const [fontsLoaded] = useFonts({
    "Teacher-Regular": require("../../assets/fonts/DMSans-Regular.ttf"),
    "Teacher-Medium": require("../../assets/fonts/DMSans-Medium.ttf"),
    "Teacher-SemiBold": require("../../assets/fonts/DMSans-SemiBold.ttf"),
    "Teacher-Bold": require("../../assets/fonts/DMSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Hello</Text>;
  }
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#021526",
    padding: 20,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Teacher-SemiBold",
  },
});

export { ButtonPrimary };
