import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, Text} from 'react-native-paper';

interface AuthInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  touched?: boolean;
  secureTextEntry?: boolean;
}

export const AuthInput = ({
  label,
  value,
  onChangeText,
  error,
  touched,
  secureTextEntry,
}: AuthInputProps) => {
  return (
    <>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        error={touched && !!error}
        style={styles.input}
      />
      {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});
