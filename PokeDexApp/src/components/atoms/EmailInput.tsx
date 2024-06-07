import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const EmailInput = () => {
  const emailValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email !!!')
      .required('Email is required'),
  });

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={emailValidationSchema}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            mode="outlined"
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            textColor='#FFFFFF'
            right={<TextInput.Affix />}
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
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
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

export default EmailInput;
