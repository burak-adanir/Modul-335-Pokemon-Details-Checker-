import { FlatList, StyleSheet, Text, View } from "react-native";
import PokemonCard from "./src/components/organisms/PokemonCard";
import { useEffect, useState } from "react";
import Pokemon from "./src/types/Pokemon";
import PokemonService from "./src/services/PokemonService";

export default function App() {
  const [filterdList, setFilteredList] = useState<Pokemon[]>([]);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    PokemonService()
      .getAll()
      .then((value) => {
        setPokemonList(value.data);
        console.log(value);
        setFilteredList(value.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => <PokemonCard pokemonData={item} />}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
