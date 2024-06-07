import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const AgeInput = () => {
  const [age, setAge] = React.useState('');

  const handleAgeChange = (text: string) => {
    // Allow only numbers and limit to 3 digits
    const validatedText = text.replace(/[^0-9]/g, '').slice(0, 3);
    setAge(validatedText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        placeholder="Enter your age"
        placeholderTextColor="#FFFFFF"
        textColor='#FFFFFF'
        right={<TextInput.Affix />}
        value={age}
        onChangeText={handleAgeChange}
        style={styles.input}
        theme={{ 
          colors: { 
            text: '#FFFFFF', 
            primary: '#FFFFFF', 
            background: 'rgba(0, 0, 0, 0.2)',
            placeholder: '#FFFFFF', 
            outline: '#FFFFFF'
          } 
        }}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 10,
    borderRadius: 5,
    borderColor: '#FFFFFF'
  },
  input: {
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});

export default AgeInput;
