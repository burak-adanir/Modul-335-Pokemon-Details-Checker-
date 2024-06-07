import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import LoginPage from "./src/components/pages/LoginPage"
import React from 'react';

export default function App() {
  return (
    <PaperProvider>
      <LoginPage />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
