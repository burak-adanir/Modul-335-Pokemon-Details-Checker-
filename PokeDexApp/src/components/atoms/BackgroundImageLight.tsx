import React from "react";
import { View, Image, StyleSheet } from "react-native";

const BackgroundImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/megan-breiter-route-120.png")}
        style={styles.backgroundImage}
        blurRadius={3}
      />
      <Image
        source={require("../../../assets/International_Pokémon_logo.png")}
        style={styles.logoImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  logoImage: {
    resizeMode: "contain",
    position: "absolute",
    top: '10%',
  },
});

export default BackgroundImage;
