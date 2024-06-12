import { useState } from "react";
import {
  Card,
  IconButton,
  Dialog,
  Paragraph,
  Portal,
  Button,
} from "react-native-paper";
import { FlatList, View, StyleSheet } from "react-native";
import PokemonService from "../../services/PokemonService";
import Pokemon from "../../types/Pokemon";
import PokemonDetails from "../molecules/PokemonDetails";

export default function PokemonCard({ pokemonData }: { pokemonData: Pokemon }) {
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);

  const toggleDeleteDialog = () => {
    setDeleteDialogVisible(!deleteDialogVisible);
  };

  const handleDelete = (pokemon: Pokemon) => {
    PokemonService()
      .delete(pokemon.id!)
      .then(() => {
        console.log("Pokemon deleted");
        toggleDeleteDialog();
      });
  };

  return (
    <View style={styles.view}>
      <Card mode="outlined">
        <Card.Title
          titleVariant="headlineMedium"
          subtitleVariant="labelLarge"
          title={pokemonData.name.english}
          subtitle={`Pokédex: #${pokemonData.type}`}
        />
        <Card.Content>
          <Card.Cover
            resizeMode="contain"
            source={{
              uri:
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` +
                pokemonData.id +
                `.png`,
            }}
          />
          <PokemonDetails
            data={{
              HP: pokemonData.stats.HP,
              Attack: pokemonData.stats.Attack,
              Defense: pokemonData.stats.Defense,
              SpAtk: pokemonData.stats.SpAtk,
              SpDef: pokemonData.stats.SpDef,
              Speed: pokemonData.stats.Speed,
            }}
          />
        </Card.Content>
        <Card.Actions>
          <IconButton icon="delete" mode="outlined" style={styles.icons} />
          <IconButton icon="pencil" mode="outlined" style={styles.icons} />
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    borderRadius: 15,
  },
  card: {
    borderWidth: 4,
  },
  typeContainer: {
    marginTop: 8,
    width: "100%",
    flexDirection: "row",
  },
  icons: {
    borderWidth: 0,
  },
});
