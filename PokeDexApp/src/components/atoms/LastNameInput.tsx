import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const LastNameInput = () => {
  const [lastName, setLastName] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        placeholder="Enter your last name"
        placeholderTextColor="#FFFFFF"
        textColor='#FFFFFF'
        right={<TextInput.Affix />}
        value={lastName}
        onChangeText={text => setLastName(text)}
        style={styles.input}
        theme={{ colors: 
          { 
            text: '#FFFFFF', 
            primary: '#FFFFFF', 
            background: 'rgba(0, 0, 0, 0.2)',
            placeholder: '#FFFFFF', 
            outline: '#FFFFFF'
          } 
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
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

export default LastNameInput;
