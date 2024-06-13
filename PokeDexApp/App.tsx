import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from "react";
import UserService from "./src/services/UserService";
import { PaperProvider } from "react-native-paper";
import LoginPage from "./src/components/pages/LoginPage";
import NavBar from './src/components/molecules/NavBar';
import AuthHandler from './AuthHandler'; // Import the AuthHandler component

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
          <Stack.Screen name="/navbar" component={NavBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5C9CF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: "100%",
    height: "15%",
    marginTop: 32
  },
});
