import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "react-native-paper";

const screenWidth = Dimensions.get("window").width;

export default function HomeButton() {
  return (
    <View style={styles.homeButton}>
      <Icon name="home" size={30} color="#E66161" />
      <Text style={styles.hometext}>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  homeButton: {
    position: "absolute",
    alignItems: "center",
    top: "50%",
    left: screenWidth / 5,
    transform: [{ translateY: 12 }],
  },
  hometext: {
    color: "#E66161",
    fontWeight: "bold",
    fontSize: 20,
    position: "relative",
    float: "left",
  },
});
