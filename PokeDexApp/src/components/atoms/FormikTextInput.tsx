import React from 'react';
import { TextInput } from 'react-native-paper';
import { useField } from 'formik';
import { StyleSheet, View, Text } from 'react-native';

const FormikTextInput = ({ name, placeholder, secureTextEntry = false }) => {
  const [field, meta] = useField(name);

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF"
        textColor="#FFFFFF"
        right={<TextInput.Affix />}
        value={field.value}
        onChangeText={field.onChange(name)}
        onBlur={field.onBlur(name)}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        theme={{
          colors: {
            text: '#FFFFFF',
            primary: '#FFFFFF',
            background: 'rgba(0, 0, 0, 0.2)',
            placeholder: '#FFFFFF',
            outline: '#FFFFFF',
          },
        }}
      />
      {meta.touched && meta.error && (
        <Text style={styles.errorText}>{meta.error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 10,
    borderRadius: 5,
  },
  input: {
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  errorText: {
    color: '#DCA092',
    fontSize: 12,
    marginTop: 5,
  },
});

export default FormikTextInput;
