import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import getRelativesLocationHandler from "../../modules/relatives/relatives";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MarkerComponent from "../../components/Markers";
import ProfileComponent from "../../components/Profile";

function RelativeTrackingScreen() {
  const [fontsLoaded] = useFonts({
    "Teacher-Regular": require("../../../assets/fonts/DMSans-Regular.ttf"),
    "Teacher-Medium": require("../../../assets/fonts/DMSans-Medium.ttf"),
    "Teacher-SemiBold": require("../../../assets/fonts/DMSans-SemiBold.ttf"),
    "Teacher-Bold": require("../../../assets/fonts/DMSans-Bold.ttf"),
  });

  const [relativeGroupMembers, setRelativeGroupMembers] = useState([]);

  useEffect(() => {
    fetchRelativeCoordinates();
  }, []);

  async function fetchRelativeCoordinates() {
    let userId = await AsyncStorage.getItem("userId");
    let response = await getRelativesLocationHandler(userId);
    console.log(response.members);
    setRelativeGroupMembers(response.members);
  }

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {relativeGroupMembers.map((user) => {
          // console.log(user);
          return <MarkerComponent key={user.firstName} values={user} />;
        })}
      </MapView>
      <View style={styles.relativeMemberListWrapper}>
        <View style={styles.heading}>
          <Text style={styles.relativeMemberListHeader}>Overview</Text>
          <Text style={styles.relativeMemberListParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </Text>
        </View>
        <View style={styles.featureContainerParent}>
          <View style={styles.featureIcon}></View>
          <View style={styles.featureIcon}></View>
        </View>
      </View>
      <View style={styles.relativeList}>
        <View>
          <Text style={styles.relativeMemberListHeader}>Your Relatives</Text>
          <Text style={styles.relativeMemberListParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </Text>
        </View>
        <ScrollView style={styles.relativeListView}>
          {relativeGroupMembers.map((user) => {
            // console.log(user);
            return <ProfileComponent key={user.firstName} values={user} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markerImage: {
    height: 20,
    width: 20,
  },
  relativeMemberListWrapper: {
    position: "absolute",
    bottom: 20,
    height: "23%",
    // width: "100%",
    margin: 20,
    width: "90%",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.9)",
    borderRadius: 20,
  },
  relativeMemberListHeader: {
    color: "white",
    fontFamily: "Teacher-SemiBold",
    fontSize: 30,
  },
  featureContainerParent: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    gap: 30,
  },
  featureIcon: {
    backgroundColor: "rgb(255,255,255)",
    // height: "100%",
    flex: 1,
    borderRadius: 5,
  },
  relativeMemberListParagraph: {
    fontFamily: "Teacher-Regular",
    color: "white",
    fontSize: 17,
  },
  relativeList: {
    position: "absolute",
    // display: "none",
    bottom: 0,
    height: "40%",
    // width: "100%",
    // margin: 20,
    width: "100%",
    padding: 20,
    // flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    // borderRadius: 20,
    alignSelf: "stretch",
  },
  relativeListView: {
    flex: 1,
  },
});

export default RelativeTrackingScreen;
