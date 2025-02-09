import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

function DashboardScreen() {
  const [fontsLoaded] = useFonts({
    "Teacher-Regular": require("../../../assets/fonts/DMSans-Regular.ttf"),
    "Teacher-Medium": require("../../../assets/fonts/DMSans-Medium.ttf"),
    "Teacher-SemiBold": require("../../../assets/fonts/DMSans-SemiBold.ttf"),
    "Teacher-Bold": require("../../../assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Hello</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dashboardHeading}>
        <Text style={styles.heading}>Good Morning, Hector</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
        <View style={styles.linkedDeviceContainer}>
          <View style={styles.linkedDeviceContainerIcon}></View>
          <View style={styles.linkedDeviceWrapper}>
            <Text style={styles.linkedDeviceState}>Hector’s Smart Watch</Text>
            <Text style={styles.linkedDeviceStateParagraph}>Active</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginVertical: 100,
  },
  heading: {
    fontFamily: "Teacher-SemiBold",
    fontSize: 30,
    marginTop: 18,
  },
  paragraph: {
    fontFamily: "Teacher-Regular",
    fontSize: 14,
    color: "#4D4D4D",
    marginTop: 12,
  },
  headshotImg: {
    height: 100,
    width: 100,
    backgroundColor: "orange",
    borderRadius: "50%",
  },
  dashboardHeading: {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
  },
  linkedDeviceContainer: {
    backgroundColor: "#17183b",
    padding: 15,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    marginTop: 50,
  },
  linkedDeviceContainerIcon: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: "50%",
  },
  linkedDeviceState: {
    color: "white",
    fontFamily: "Teacher-SemiBold",
    fontSize: 18,
  },
  linkedDeviceStateParagraph: {
    color: "#4e4e4e",
  },
  linkedDeviceWrapper: {
    marginLeft: 10,
    gap: 6,
  },
});

export default DashboardScreen;
