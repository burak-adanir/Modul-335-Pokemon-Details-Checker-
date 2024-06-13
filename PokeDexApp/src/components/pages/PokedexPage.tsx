import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import Pokemon from "../../types/Pokemon";
import PokemonService from "../../services/PokemonService";
import PokemonCard from "../organisms/PokemonCard";
import NavBar from "../molecules/NavBar";
import React from "react";

export default function PokedexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState<Pokemon[]>([]);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    const newList = pokemonList.filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredList(newList);
  };

  const fetchPokemonList = async () => {
    try {
      setRefreshing(true);
      const response = await PokemonService().getAll();
      setPokemonList(response.data);
      setFilteredList(response.data);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
      setRefreshing(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchPokemonList();
    }, [])
  );

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
        refreshing={refreshing}
        onRefresh={fetchPokemonList}
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
