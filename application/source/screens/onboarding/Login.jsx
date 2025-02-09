import { useFonts } from "expo-font";
import { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput } from "react-native";
import { ButtonPrimary } from "../../components/Buttons";
import userLogin from "../../api/user/userApi";

function LoginScreen() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [fontsLoaded] = useFonts({
    "Teacher-Regular": require("../../../assets/fonts/DMSans-Regular.ttf"),
    "Teacher-Medium": require("../../../assets/fonts/DMSans-Medium.ttf"),
    "Teacher-SemiBold": require("../../../assets/fonts/DMSans-SemiBold.ttf"),
    "Teacher-Bold": require("../../../assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Hello</Text>;
  }

  async function callRegistrationHandler() {
    await userLogin(emailAddress, password);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Create Account</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.inputText}>Email Address</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => setEmailAddress(text)}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
      <View>
        <ButtonPrimary
          content={"Create Account"}
          onPress={callRegistrationHandler}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginVertical: 80,
  },
  heading: {
    fontFamily: "Teacher-SemiBold",
    fontSize: 38,
  },
  paragraph: {
    fontFamily: "Teacher-Regular",
    fontSize: 16,
    marginTop: 14,
  },
  inputContainer: {
    marginTop: 50,
    flex: 1,
    // padding: 20,
    gap: 20,
  },
  inputText: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  inputField: {
    backgroundColor: "#bfb9b8",
    padding: 16,
    borderBottomStyle: "solid",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderWidth: 3,
    borderBottomColor: "black",
    marginTop: 16,
  },
});

export default LoginScreen;
