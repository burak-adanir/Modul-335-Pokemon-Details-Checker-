  import * as React from 'react';
  import { TextInput } from 'react-native-paper';
  import { StyleSheet, View } from 'react-native';
  import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

  const PasswordInput = () => {
    const [password, setPassword] = React.useState('');

    return (
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          placeholder="Enter your password"
          placeholderTextColor = "#FFFFFF"
          secureTextEntry
          textColor='#FFFFFF'
          right={<TextInput.Affix text="🔒" />}
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          theme={{ colors: 
            { 
              text: '#FFFFFF', 
              primary: '#FFFFFF', 
              background: 'rgba(0, 0, 0, 0.2)' ,
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

  export default PasswordInput;
