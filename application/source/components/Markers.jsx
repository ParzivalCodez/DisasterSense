import { Marker } from "react-native-maps";
import { Image } from "react-native";

function MarkerComponent(props) {
  console.log(props);

  console.log(props.values);

  return (
    <Marker
      coordinate={{
        latitude: props.values.latitude,
        longitude: props.values.longitude,
      }}
    >
      {/*<Image*/}
      {/*  source={require("../../../assets/favicon.png")}*/}
      {/*  style={styles.markerImage}*/}
      {/*/>*/}
    </Marker>
  );
}

export default MarkerComponent;
