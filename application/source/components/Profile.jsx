import { Text, View, StyleSheet } from "react-native";

function ProfileComponent(props) {
  return (
    <View style={styles.relativeMemberCard}>
      <View style={styles.relativeMemberCardProfile}></View>
      <View style={styles.relativeMemberCardDescription}>
        <Text style={styles.relativeMemberCardProfileName}>
          {props.values.firstName} {props.values.lastName}
        </Text>
        <Text style={styles.relativeMemberCardRole}>Father</Text>
      </View>
      <View style={styles.relativeBpmCard}>
        <Text>100 BPM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  relativeMemberCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "black",
    // padding: 15,
    marginBottom: 20,
    marginTop: 20,
  },
  relativeMemberCardProfile: {
    height: 20,
    padding: 20,
    borderRadius: "50%",
    backgroundColor: "red",
    marginRight: 10,
  },
  relativeMemberCardProfileName: {
    color: "white",
    fontFamily: "Teacher-SemiBold",
    fontSize: 20,
  },
  relativeMemberCardRole: {
    color: "white",
    fontFamily: "Teacher-Regular",
    fontSize: 14,
    marginTop: 8,
  },
  relativeBpmCard: {
    backgroundColor: "red",
    height: 20,
    // padding: 20,
    width: 60,
    // borderRadius: "50%",
  },
  relativeMemberCardDescription: {
    flex: 1,
  },
});

export default ProfileComponent;
