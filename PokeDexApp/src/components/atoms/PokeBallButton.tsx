import React from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";

export default function PokeBallButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("new pokemon")}>
        <Image
          style={styles.pokeball}
          source={require("../../../assets/pokeball.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  pokeball: {
    width: 60,
    height: 60,
    marginBottom: 40,
  },
});
