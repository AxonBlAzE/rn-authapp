import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {NavigationProp} from '@react-navigation/native';

const LoginScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
          // Handle login logic here
        }}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <>
            <TextInput
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              error={touched.email && !!errors.email}
              style={styles.input}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              label="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
              error={touched.password && !!errors.password}
              style={styles.input}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <Button
              mode="contained"
              onPress={() => handleSubmit()}
              style={styles.button}>
              Login
            </Button>

            <Button
              mode="text"
              onPress={() => navigation.navigate('Signup')}
              style={styles.button}>
              Don't have an account? Sign up
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default LoginScreen;
