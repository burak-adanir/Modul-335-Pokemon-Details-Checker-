import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";

export default function PokeBallButton() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("/create", {
            id: undefined,
            title: "Create Pokemon",
          })
        }
      >
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
