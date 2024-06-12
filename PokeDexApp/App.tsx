import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import RegistrationPage from './src/components/pages/RegisterPage';
import LoginPage from './src/components/pages/LoginPage';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <LoginPage />
      </View>
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
});
