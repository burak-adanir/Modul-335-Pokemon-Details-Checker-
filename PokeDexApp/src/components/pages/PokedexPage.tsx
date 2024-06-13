import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import Pokemon from "../../types/Pokemon";
import PokemonService from "../../services/PokemonService";
import PokemonCard from "../organisms/PokemonCard";
import NavBar from "../molecules/NavBar";
import React from "react";

/** Page that passes all existing pokemon. Also includes buttons to edit and delete
 *  each pokemon and a search bar to filter by name. */

export default function PokedexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState<Pokemon[]>([]);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    const newlist = pokemonList.filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredList(newlist);
  };

  useEffect(() => {
    PokemonService()
      .getAll()
      .then((value) => {
        setPokemonList(value.data);
        setFilteredList(value.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        data={filteredList}
        renderItem={({ item }) => <PokemonCard pokemonData={item} />}
        keyExtractor={(item) => `${item.id}`}
      />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
});
