import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../molecules/NavBar";
import { TextInput, Button } from "react-native-paper";
import UserService from "../../services/UserService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, StyleSheet, Text } from "react-native";

/** Page for the user to view their information defined in the login
 *  and log out of the pokedex
 */

export default function ProfilePage() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const loadUserData = async () => {
      const userDetails = await AsyncStorage.getItem("user_details");
      if (userDetails) {
        const user = JSON.parse(userDetails);
        setEmail(user.email);
        setFirstName(user.firstname || "");
        setLastName(user.lastname || "");
        setAge(user.age.toString());
      }
    };

    loadUserData();
  }, []);

  const handleUpdate = async () => {
    console.log("Updated credentials");
    navigation.navigate("/pokedex");
  };

  const handleLogout = async () => {
    await UserService().logOut();
    console.log("Logged out");
    navigation.navigate("/login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}> Welcome Back!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            textColor="#FFFFFF"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            theme={{
              colors: {
                text: "#FFFFFF",
                primary: "#FFFFFF",
                background: "rgba(0, 0, 0, 0.2)",
                placeholder: "#FFFFFF",
                outline: "#FFFFFF",
              },
            }}
          />
          <TextInput
            mode="outlined"
            placeholder="First name"
            placeholderTextColor="#FFFFFF"
            textColor="#FFFFFF"
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            theme={{
              colors: {
                text: "#FFFFFF",
                primary: "#FFFFFF",
                background: "rgba(0, 0, 0, 0.2)",
                placeholder: "#FFFFFF",
                outline: "#FFFFFF",
              },
            }}
          />
          <TextInput
            mode="outlined"
            placeholder="Last name"
            placeholderTextColor="#FFFFFF"
            textColor="#FFFFFF"
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            theme={{
              colors: {
                text: "#FFFFFF",
                primary: "#FFFFFF",
                background: "rgba(0, 0, 0, 0.2)",
                placeholder: "#FFFFFF",
                outline: "#FFFFFF",
              },
            }}
          />
          <TextInput
            mode="outlined"
            placeholder="Age"
            placeholderTextColor="#FFFFFF"
            textColor="#FFFFFF"
            style={styles.input}
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            theme={{
              colors: {
                text: "#FFFFFF",
                primary: "#FFFFFF",
                background: "rgba(0, 0, 0, 0.2)",
                placeholder: "#FFFFFF",
                outline: "#FFFFFF",
              },
            }}
          />
          <Button
            style={styles.logoutButton}
            buttonColor="#EE3F4A"
            mode="contained"
            onPress={handleLogout}
          >
            Logout
          </Button>
        </View>
      </View>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A2A2A",
  },
  title: {
    fontSize: 40,
    color: "#FFFFFF",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    zIndex: 1,
    width: "70%",
    marginTop: "10%",
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
  logoutButton: {
    position: "absolute",
    width: 138,
    alignSelf: "center",
    bottom: -100,
  },
  errorText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 0,
  },
});
