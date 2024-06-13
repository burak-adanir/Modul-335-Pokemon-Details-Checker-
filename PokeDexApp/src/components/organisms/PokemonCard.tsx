import React from "react";
import { useState } from "react";
import {
  Card,
  Dialog,
  IconButton,
  Paragraph,
  Portal,
} from "react-native-paper";
import { FlatList, View, StyleSheet, Text, Image, Button } from "react-native";
import PokemonService from "../../services/PokemonService";
import Pokemon from "../../types/Pokemon";
import PokemonDetails from "../molecules/PokemonDetails";
import { useNavigation } from "@react-navigation/native";

export default function PokemonCard({ pokemonData }: { pokemonData: Pokemon }) {
  const navigation = useNavigation<any>();

  const handleDelete = (pokemon: Pokemon) => {
    PokemonService()
      .delete(pokemon.id!)
      .then(() => {
        console.log("Pokemon deleted");
      });
  };

  const handleUpdate = (pokemon: Pokemon) => {
    navigation.navigate("/create", {
      pokemonId: pokemon.id,
      title: "Update Pokemon",
    });
  };

  return (
    <View style={styles.view}>
      <Card mode="outlined">
        <View style={styles.numContainer}>
          <Text style={styles.numText}>#{pokemonData.id}</Text>
        </View>
        <Card.Title
          titleVariant="headlineMedium"
          subtitleVariant="labelLarge"
          title={pokemonData.name.english}
          subtitle={`Type: #${pokemonData.type}`}
        />
        <Card.Cover
          resizeMode="contain"
          source={{
            uri:
              `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` +
              pokemonData.id +
              `.png`,
          }}
        />
        <Card.Content>
          <PokemonDetails data={pokemonData.base} />
          <Card.Actions>
            <IconButton
              icon="pencil"
              mode="outlined"
              style={styles.icons}
              onPress={() => handleUpdate(pokemonData)}
            />
            <IconButton
              onPress={() => handleDelete(pokemonData)}
              icon="delete"
              mode="outlined"
              style={styles.icons}
            />
          </Card.Actions>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    borderRadius: 15,
    marginHorizontal: 50,
    marginVertical: 20,
  },
  numContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  numText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    borderWidth: 4,
  },
  details: {
    marginTop: 8,
    width: "100%",
    flexDirection: "row",
  },
  icons: {
    borderWidth: 0,
  },
});
