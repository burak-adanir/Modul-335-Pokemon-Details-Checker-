import * as React from 'react';
import { StyleSheet, View } from "react-native";
import BackgroundImage from "../atoms/BackgroundImageLight";
import PasswordInput from "../atoms/PasswordInput";
import EmailInput from "../atoms/EmailInput";
import { Button, TextInput, Text } from "react-native-paper";
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email !!!').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function LoginPage() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <BackgroundImage />
          <View style={styles.overlay}>
            <View style={styles.inputContainer}>
              <TextInput
                mode="outlined"
                placeholder="Email"
                placeholderTextColor="#FFFFFF"
                textColor='#FFFFFF'
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
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
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <TextInput
                mode="outlined"
                placeholder="Enter your password"
                placeholderTextColor="#FFFFFF"
                secureTextEntry
                textColor='#FFFFFF'
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
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
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <Button
                style={styles.loginButton}
                buttonColor="#3368B1"
                mode="contained"
                onPress={handleSubmit}
              >
                Login
              </Button>
              <Button
                style={styles.registerButton}
                buttonColor="#E3B507"
                mode="contained"
                onPress={() => console.log('Register Pressed')}
              >
                No account yet?
              </Button>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    zIndex: 1,
    width: '70%',
    marginTop: '10%',
  },
  input: {
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  loginButton: {
    width: 90,
    alignSelf: 'center',
    marginTop: '10%',
  },
  registerButton: {
    position: "absolute",
    width: 160,
    alignSelf: 'center',
    bottom: -190,
  },
  errorText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 0,
  },
});
