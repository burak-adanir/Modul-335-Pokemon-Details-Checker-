import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import PokeBallButton from './src/components/atoms/PokeBallButton';
import NavBar from './src/components/molecules/NavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar></NavBar>
      <StatusBar style="auto" />
    </View>
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
  logoImage: {
    width: "100%",
    height: "15%",
    marginTop: 32,
  },
});
