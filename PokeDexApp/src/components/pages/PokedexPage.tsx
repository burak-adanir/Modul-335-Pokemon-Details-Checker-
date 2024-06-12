import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import Pokemon from "../../types/Pokemon";
import PokemonService from "../../services/PokemonService";
import PokemonCard from "../organisms/PokemonCard";

export default function PokedexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    const newlist = pokemonList.filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredList(newlist);
  };

  const [filterdList, setFilteredList] = useState<Pokemon[]>([]);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    PokemonService()
      .getAll()
      .then((value) => {
        setPokemonList(value.data);
        setFilteredList(value.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={styles.container}>
        <Searchbar
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => <PokemonCard pokemonData={item} />}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </SafeAreaView>
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
  searchBar: {
    marginTop: 16,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
  },
  screen: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
});
