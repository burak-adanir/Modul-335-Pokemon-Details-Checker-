import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  Text,
  View,
} from "react-native";
import { Appbar, Button, HelperText, TextInput } from "react-native-paper";
import Element, { TYPE } from "../../types/Element";
import { useFormik } from "formik";
import * as yup from "yup";
import PokemonType from "../../types/Pokemon";
import PokemonService from "../../services/PokemonService";
import { AxiosError, AxiosResponse } from "axios";
import {
  CommonActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

/** Page to either Create a new pokemon or update an existing pokemon depending on the data given
 *  @param id if defined, edit page will be displayed, else create page will be displayed
 *  @param title string for page's title text
 */

export default function CreatePage() {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { id, title } = route.params;

  /** If the id is defined, get the current pokemon data for update method
   */
  useEffect(() => {
    if (id !== undefined) {
      PokemonService()
        .getById(id)
        .then((value: AxiosResponse<PokemonType>) => {
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
    navigation.navigate("/pokemons");
  };

  const typeCasing = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  /** On submit if pokemon is defined it will update any new values, else if will create a new
   *  pokemon with the values provided
   */
  const onSubmit = (values: formikValues) => {
    const types: Element[] = [];
    types.push(values.type as Element);
    if (values.secondType !== "") {
      types.push(values.secondType as Element);
    }
    const newPokemon: PokemonType = {
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

    if (id === undefined) {
      PokemonService()
        .create(newPokemon)
        .then((_value) => {
          navigateBackToPage();
          navigation.goBack();
        })
        .catch((error: AxiosError) => console.log(error.message));
    } else {
      newPokemon.id = id;
      PokemonService()
        .update(id, newPokemon)
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
    <SafeAreaView style={[styles.screen]}>
      <ImageBackground />
      <Appbar.Header style={[styles.topAppBar]}>
        <Appbar.BackAction color="white" onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.listScreen]}
      >
        <TextInput
          id="name"
          style={[styles.textField]}
          textColor="#fff"
          label="Name"
          mode="outlined"
          value={formik.values.name}
          error={formik.errors.name !== undefined}
          onChangeText={(name: string) => {
            formik.setFieldValue("name", name).then((_) => {
              formik.validateField("name");
            });
          }}
          theme={{
            colors: {
              onSurfaceVariant: "#fff",
              primary: "#fff",
            },
          }}
        />
        {formik.errors.name ? (
          <HelperText style={styles.helperText} type="error" visible={true}>
            {formik.errors.name}
          </HelperText>
        ) : (
          <></>
        )}
        <TextInput
          id="type"
          style={[styles.textField]}
          textColor="#fff"
          label="Type"
          mode="outlined"
          error={formik.errors.type !== undefined}
          onChangeText={(type: string) => {
            formik.setFieldValue("type", typeCasing(type)).then((_) => {
              formik.validateField("type");
            });
          }}
          theme={{
            colors: {
              onSurfaceVariant: "#fff",
              primary: "#fff",
            },
          }}
        />
        {formik.errors.type ? (
          <HelperText style={styles.helperText} type="error" visible={true}>
            {formik.errors.type}
          </HelperText>
        ) : (
          <></>
        )}
        <TextInput
          id="secondaryType"
          style={[styles.textField]}
          textColor="#fff"
          label="Type (optional)"
          mode="outlined"
          error={formik.errors.secondType !== undefined}
          onChangeText={(type: string) => {
            formik.setFieldValue("secondType", typeCasing(type)).then((_) => {
              formik.validateField("secondType");
            });
          }}
          theme={{
            colors: {
              onSurfaceVariant: "#fff",
              primary: "#fff",
            },
          }}
        />
        {formik.errors.secondType ? (
          <HelperText style={styles.helperText} type="error" visible={true}>
            {formik.errors.secondType}
          </HelperText>
        ) : (
          <></>
        )}
        <TextInput
          id="hp"
          style={[styles.textField]}
          textColor="#fff"
          label="HP"
          mode="outlined"
          value={formik.values.hp}
          error={formik.errors.hp !== undefined}
          onChangeText={(hp: string) => {
            formik.setFieldValue("hp", hp).then((_) => {
              formik.validateField("hp");
            });
          }}
          theme={{
            colors: {
              onSurfaceVariant: "#fff",
              primary: "#fff",
            },
          }}
        />
        {formik.errors.hp ? (
          <HelperText style={styles.helperText} type="error" visible={true}>
            {formik.errors.hp}
          </HelperText>
        ) : (
          <></>
        )}
        <TextInput
          id="attack"
          style={[styles.textField]}
          textColor="#fff"
          label="Attack"
          mode="outlined"
          value={formik.values.attack}
          error={formik.errors.attack !== undefined}
          onChangeText={(attack: string) => {
            formik.setFieldValue("attack", attack).then((_) => {
              formik.validateField("attack");
            });
          }}
          theme={{
            colors: {
              onSurfaceVariant: "#fff",
              primary: "#fff",
            },
          }}
        />
        {formik.errors.attack ? (
          <HelperText style={styles.helperText} type="error" visible={true}>
            {formik.errors.attack}
          </HelperText>
        ) : (
          <></>
        )}
        <TextInput
          id="defense"
          style={[styles.textField]}
          textColor="#fff"
          label="Defense"
          mode="outlined"
          value={formik.values.defense}
          error={formik.errors.defense !== undefined}
          onChangeText={(defense: string) => {
            formik.setFieldValue("defense", defense).then((_) => {
              formik.validateField("defense");
            });
          }}
          theme={{
            colors: {
              onSurfaceVariant: "#fff",
              primary: "#fff",
            },
          }}
        />
        {formik.errors.defense ? (
          <HelperText style={styles.helperText} type="error" visible={true}>
            {formik.errors.defense}
          </HelperText>
        ) : (
          <></>
        )}
        <TextInput
          id="SpAtk"
          style={[styles.textField]}
          textColor="#fff"
          label="Sp. Attack"
          mode="outlined"
          value={formik.values.SpAtk}
          error={formik.errors.SpAtk !== undefined}
          onChangeText={(SpAtk: string) => {
            formik.setFieldValue("SpAtk", SpAtk).then((_) => {
              formik.validateField("SpAtk");
            });
          }}
          theme={{
            colors: {
              onSurfaceVariant: "#fff",
              primary: "#fff",
            },
          }}
        />
        {formik.errors.SpAtk ? (
          <HelperText style={styles.helperText} type="error" visible={true}>
            {formik.errors.SpAtk}
          </HelperText>
        ) : (
          <></>
        )}
        <TextInput
          id="SpDef"
          style={[styles.textField]}
          textColor="#fff"
          label="Sp. Defense"
          mode="outlined"
          value={formik.values.SpDef}
          error={formik.errors.SpDef !== undefined}
          onChangeText={(SpDef: string) => {
            formik.setFieldValue("SpDef", SpDef).then((_) => {
              formik.validateField("SpDef");
            });
          }}
          theme={{
            colors: {
              onSurfaceVariant: "#fff",
              primary: "#fff",
            },
          }}
        />
        {formik.errors.SpDef ? (
          <HelperText style={styles.helperText} type="error" visible={true}>
            {formik.errors.SpDef}
          </HelperText>
        ) : (
          <></>
        )}
        <TextInput
          id="speed"
          style={[styles.textField]}
          textColor="#fff"
          label="Speed"
          mode="outlined"
          value={formik.values.speed}
          error={formik.errors.speed !== undefined}
          onChangeText={(speed: string) => {
            formik.setFieldValue("speed", speed).then((_) => {
              formik.validateField("speed");
            });
          }}
          theme={{
            colors: {
              onSurfaceVariant: "#fff",
              primary: "#fff",
            },
          }}
        />
        {formik.errors.speed ? (
          <HelperText style={styles.helperText} type="error" visible={true}>
            {formik.errors.speed}
          </HelperText>
        ) : (
          <></>
        )}
        <Button
          style={styles.button}
          theme={{
            colors: {
              primary: "#000",
            },
          }}
          onPress={(_) => {
            formik.handleSubmit();
          }}
        >
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(42, 42, 42)",
  },
  listScreen: {
    paddingHorizontal: 64,
  },
  topAppBar: {
    backgroundColor: "rgba(255, 255, 255, 0.0)",
  },
  titleContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  backgroundImage: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height + 100,
  },
  image: {
    width: "100%",
    height: 100,
    marginTop: 64,
    marginBottom: 32,
  },
  textField: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    marginBottom: 16,
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
  helperText: {
    marginTop: -15,
  },
});

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
  .required("Required")
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
