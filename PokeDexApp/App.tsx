import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from "react";
import UserService from "./src/services/UserService";
import LoginPage from "./src/components/pages/LoginPage";
import NavBar from './src/components/molecules/NavBar';
import AuthHandler from './AuthHandler'; // Import the AuthHandler component
import RegisterPage from './src/components/pages/RegisterPage';
import PokedexPage from './src/components/pages/PokedexPage';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="AuthHandler" component={AuthHandler} />
          <Stack.Screen name="/login" component={LoginPage} />
          <Stack.Screen name="/navbar" component={PokedexPage} />
          <Stack.Screen name="/register" component={RegisterPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: "100%",
    height: "15%",
    marginTop: 32
  },
});
