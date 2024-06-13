import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import PokeBallButton from "../atoms/PokeBallButton";
import HomeButton from "../atoms/HomeButton";
import ProfileButton from "../atoms/ProfileButton";
import { useNavigation } from "@react-navigation/native";

/** Navigation bar for entire app. Includes navigation to the Create, Pokemon
 * and Profile page
 */

const screenWidth = Dimensions.get("window").width;

export default function NavBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Svg height="80" style={styles.svg} viewBox="0 0 424 69">
        <Path
          fill="white"
          d="M0 0.428589H106H149.793C155.636 0.428589 161.187 2.98416 164.987 7.42355L185.839 31.7863C201.385 49.9492 229.817 48.8215 243.876 29.4844L259.01 8.66781C262.773 3.49137 268.787 0.428589 275.187 0.428589H318H424V75C424 88.2549 413.255 99 400 99H24C10.7452 99 0 88.2548 0 75V0.428589Z"
        />
        <HomeButton />
        <Circle
          cx="110"
          cy="45"
          r="45"
          fill="gray"
          opacity="0"
          onPress={(e) => navigation.navigate("/pokedex")}
        />
        <ProfileButton />
        <Circle
          cx="310"
          cy="45"
          r="45"
          fill="gray"
          opacity="0"
          onPress={(e) => navigation.navigate("/profile")}
        />
      </Svg>
      <View style={styles.button}>
        <PokeBallButton></PokeBallButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  svg: {
    position: "absolute",
    bottom: 0,
    height: 0,
    width: screenWidth,
    alignItems: "center",
  },
  button: {
    position: "relative",
    bottom: 0,
    left: 1,
    right: 0,
  },
  buttonText: {
    color: "grey",
  },
  logoutButton: {
    position: "absolute",
    bottom: 100,
    right: 20,
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
