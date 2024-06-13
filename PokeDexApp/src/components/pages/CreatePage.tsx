import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Appbar, Button, HelperText, TextInput } from "react-native-paper";
import { useFormik } from "formik";
import * as yup from "yup";
import PokemonService from "../../services/PokemonService";
import {
  CommonActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import Pokemon from "../../types/Pokemon";
import { AxiosError, AxiosResponse } from "axios";
import Element from "../../types/Element";
import { TYPE } from "../../types/Element";

export default function CreatePage() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { buttonText, pokemonId } = route.params;

  useEffect(() => {
    if (pokemonId !== undefined) {
      PokemonService()
        .getById(pokemonId)
        .then((value: AxiosResponse<Pokemon>) => {
          formik.setValues({
            name: value.data.name.english,
            type: value.data.type[0],
            secondType: value.data.type.at(1) || "",
            hp: value.data.base.HP.toString(),
            attack: value.data.base.Attack.toString(),
            defense: value.data.base.Defense.toString(),
            SpAtk: value.data.base["Sp. Attack"].toString(),
            SpDef: value.data.base["Sp. Defense"].toString(),
            speed: value.data.base.Speed.toString(),
          });
        })
        .catch((error: AxiosError) => {
          console.log(error);
        });
    }
  }, []);

  const navigateBackToPage = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Pokedex" }],
      })
    );
  };

  const onSubmit = (values: formikValues) => {
    const types: Element[] = [values.type as Element];
    if (values.secondType) {
      types.push(values.secondType as Element);
    }
    const newPokemon: Pokemon = {
      type: types,
      name: {
        english: values.name,
        japanese: "",
        chinese: "",
        french: "",
      },
      base: {
        HP: parseInt(values.hp),
        Attack: parseInt(values.attack),
        Defense: parseInt(values.defense),
        "Sp. Attack": parseInt(values.SpAtk),
        "Sp. Defense": parseInt(values.SpDef),
        Speed: parseInt(values.speed),
      },
    };

    if (pokemonId === undefined) {
      PokemonService()
        .create(newPokemon)
        .then((_value) => {
          navigateBackToPage();
          navigation.goBack();
        })
        .catch((error: AxiosError) => console.log(error.message));
    } else {
      newPokemon.id = pokemonId;
      PokemonService()
        .update(pokemonId, newPokemon)
        .then((_value) => {
          navigateBackToPage();
          navigation.goBack();
        })
        .catch((error: AxiosError) => {
          console.log(error.message);
        });
    }
  };

  const formik = useFormik<formikValues>({
    initialValues: {
      name: "",
      type: "",
      secondType: "",
      hp: "",
      attack: "",
      defense: "",
      SpAtk: "",
      SpDef: "",
      speed: "",
    },
    validationSchema: formikValidation,
    onSubmit(values, { setSubmitting }) {
      setTimeout(() => {
        onSubmit(values);
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <SafeAreaView style={styles.screen}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.listScreen}
      >
        <TextInput
          id="name"
          style={styles.input}
          label="Name"
          mode="outlined"
          value={formik.values.name}
          error={formik.errors.name !== undefined}
          onChangeText={(name: string) => {
            formik.setFieldValue("name", name).then(() => {
              formik.validateField("name");
            });
          }}
          theme={inputTheme}
        />
        {formik.errors.name ? (
          <HelperText type="error" visible={true}>
            {formik.errors.name}
          </HelperText>
        ) : null}
        <TextInput
          id="type"
          style={styles.input}
          label="Type"
          mode="outlined"
          value={formik.values.type}
          error={formik.errors.type !== undefined}
          onChangeText={(type: string) => {
            formik.setFieldValue("type", type.toUpperCase()).then(() => {
              formik.validateField("type");
            });
          }}
          theme={inputTheme}
        />
        {formik.errors.type ? (
          <HelperText type="error" visible={true}>
            {formik.errors.type}
          </HelperText>
        ) : null}
        <TextInput
          id="secondaryType"
          style={styles.input}
          label="Secondary Type"
          mode="outlined"
          value={formik.values.secondType}
          error={formik.errors.secondType !== undefined}
          onChangeText={(type: string) => {
            formik.setFieldValue("secondType", type.toUpperCase()).then(() => {
              formik.validateField("secondType");
            });
          }}
          theme={inputTheme}
        />
        {formik.errors.secondType ? (
          <HelperText type="error" visible={true}>
            {formik.errors.secondType}
          </HelperText>
        ) : null}
        <TextInput
          id="hp"
          style={styles.input}
          label="HP"
          mode="outlined"
          value={formik.values.hp}
          error={formik.errors.hp !== undefined}
          onChangeText={(hp: string) => {
            formik.setFieldValue("hp", hp).then(() => {
              formik.validateField("hp");
            });
          }}
          theme={inputTheme}
        />
        {formik.errors.hp ? (
          <HelperText type="error" visible={true}>
            {formik.errors.hp}
          </HelperText>
        ) : null}
        <TextInput
          id="attack"
          style={styles.input}
          label="Attack"
          mode="outlined"
          value={formik.values.attack}
          error={formik.errors.attack !== undefined}
          onChangeText={(attack: string) => {
            formik.setFieldValue("attack", attack).then(() => {
              formik.validateField("attack");
            });
          }}
          theme={inputTheme}
        />
        {formik.errors.attack ? (
          <HelperText type="error" visible={true}>
            {formik.errors.attack}
          </HelperText>
        ) : null}
        <TextInput
          id="defense"
          style={styles.input}
          label="Defense"
          mode="outlined"
          value={formik.values.defense}
          error={formik.errors.defense !== undefined}
          onChangeText={(defense: string) => {
            formik.setFieldValue("defense", defense).then(() => {
              formik.validateField("defense");
            });
          }}
          theme={inputTheme}
        />
        {formik.errors.defense ? (
          <HelperText type="error" visible={true}>
            {formik.errors.defense}
          </HelperText>
        ) : null}
        <TextInput
          id="SpAtk"
          style={styles.input}
          label="Sp. Attack"
          mode="outlined"
          value={formik.values.SpAtk}
          error={formik.errors.SpAtk !== undefined}
          onChangeText={(SpAtk: string) => {
            formik.setFieldValue("SpAtk", SpAtk).then(() => {
              formik.validateField("SpAtk");
            });
          }}
          theme={inputTheme}
        />
        {formik.errors.SpAtk ? (
          <HelperText type="error" visible={true}>
            {formik.errors.SpAtk}
          </HelperText>
        ) : null}
        <TextInput
          id="SpDef"
          style={styles.input}
          label="Sp. Defense"
          mode="outlined"
          value={formik.values.SpDef}
          error={formik.errors.SpDef !== undefined}
          onChangeText={(SpDef: string) => {
            formik.setFieldValue("SpDef", SpDef).then(() => {
              formik.validateField("SpDef");
            });
          }}
          theme={inputTheme}
        />
        {formik.errors.SpDef ? (
          <HelperText type="error" visible={true}>
            {formik.errors.SpDef}
          </HelperText>
        ) : null}
        <TextInput
          id="speed"
          style={styles.input}
          label="Speed"
          mode="outlined"
          value={formik.values.speed}
          error={formik.errors.speed !== undefined}
          onChangeText={(speed: string) => {
            formik.setFieldValue("speed", speed).then(() => {
              formik.validateField("speed");
            });
          }}
          theme={inputTheme}
        />
        {formik.errors.speed ? (
          <HelperText type="error" visible={true}>
            {formik.errors.speed}
          </HelperText>
        ) : null}
        <Button
          style={styles.button}
          onPress={() => {
            formik.handleSubmit();
          }}
        >
          {buttonText}
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  listScreen: {
    paddingHorizontal: 32,
  },
  input: {
    fontStyle: "normal",
    fontWeight: "400",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FFCB05",
    borderColor: "#3368B1",
    borderWidth: 1,
    width: 150,
    borderRadius: 12,
    alignSelf: "center",
    marginBottom: 32,
  },
});

const inputTheme = {
  colors: {
    onSurfaceVariant: "#fff",
    primary: "#fff",
  },
};

type formikValues = {
  name: string;
  type: string;
  secondType: string;
  hp: string;
  attack: string;
  defense: string;
  SpAtk: string;
  SpDef: string;
  speed: string;
};

const validNum = yup
  .number()
  .typeError("Enter a Valid Number")
  .positive("Enter a Positive Number");

const formikValidation = yup.object().shape({
  name: yup.string().required("Required"),
  type: yup
    .mixed<Element>()
    .oneOf(Object.values(TYPE), "This Type does not exist")
    .required("Required"),
  secondType: yup
    .mixed<Element | "">()
    .oneOf([...Object.values(TYPE), ""], "This Type does not exist"),
  hp: validNum,
  attack: validNum,
  defense: validNum,
  SpAtk: validNum,
  SpDef: validNum,
  speed: validNum,
});
