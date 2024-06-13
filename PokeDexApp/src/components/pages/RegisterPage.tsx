import * as React from 'react';
import { StyleSheet, View } from "react-native";
import BackgroundImage from "../atoms/BackgroundImageLight";
import { Button, TextInput, Text } from "react-native-paper";
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email !!!').required('Email is required'),
  password: Yup.string().required('Password is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  age: Yup.string()
    .matches(/^[0-9]+$/, 'Age must contain only numbers')
    .required('Age is required'),
});

export default function RegisterPage() {
  return (
    <Formik
      initialValues={{ email: '', password: '', firstName: '', lastName: '', age: '' }}
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
                placeholder="Password"
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
              <TextInput
                mode="outlined"
                placeholder="First Name"
                placeholderTextColor="#FFFFFF"
                textColor='#FFFFFF'
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
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
              {touched.firstName && errors.firstName && (
                <Text style={styles.errorText}>{errors.firstName}</Text>
              )}
              <TextInput
                mode="outlined"
                placeholder="Last Name"
                placeholderTextColor="#FFFFFF"
                textColor='#FFFFFF'
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
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
              {touched.lastName && errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName}</Text>
              )}
              <TextInput
                mode="outlined"
                placeholder="Age"
                placeholderTextColor="#FFFFFF"
                textColor='#FFFFFF'
                value={values.age}
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
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
              {touched.age && errors.age && (
                <Text style={styles.errorText}>{errors.age}</Text>
              )}
              <Button
                style={styles.registerButton}
                buttonColor="#3368B1"
                mode="contained"
                onPress={handleSubmit}
              >
                Register
              </Button>
              <Button
                style={styles.loginSwitchButton}
                buttonColor="#E3B507"
                mode="contained"
                onPress={() => console.log('Login Pressed')}
              >
                Already have an account?
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
  registerButton: {
    width: 120,
    alignSelf: 'center',
    marginTop: '10%',
  },
  loginSwitchButton: {
    position: "absolute",
    width: 200,
    alignSelf: 'center',
    bottom: -150,
  },
  errorText: {
    color: '#D62D2D',
    fontWeight: '700',
    textShadowColor: '#fff',
  },
});
