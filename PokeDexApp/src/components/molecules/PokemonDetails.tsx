import React from "react";
import { Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import PokemonStats from "../../types/PokemonStats";

export default function PokemonDetails({ data }: { data: PokemonStats }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text variant="bodyLarge" style={styles.text}>
          Hp:{" "}
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          Attack:{" "}
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          Defense:{" "}
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          Sp. Attack:
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          Sp. Defense:
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          Speed:
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text variant="bodyLarge" style={styles.textValue}>
          {data.HP}
        </Text>
        <Text variant="bodyLarge" style={styles.textValue}>
          {data.Attack}
        </Text>
        <Text variant="bodyLarge" style={styles.textValue}>
          {data.Defense}
        </Text>
        <Text variant="bodyLarge" style={styles.textValue}>
          {data["Sp. Attack"]}
        </Text>
        <Text variant="bodyLarge" style={styles.textValue}>
          {data["Sp. Defense"]}
        </Text>
        <Text variant="bodyLarge" style={styles.textValue}>
          {data.Speed}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    width: "50%",
  },
  text: {
    paddingVertical: 2,
    color: "#49454F",
  },
  textValue: {
    paddingVertical: 2,
    textAlign: "right",
    color: "#49454F",
  },
});
