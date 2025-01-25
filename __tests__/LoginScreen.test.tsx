import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  dispatch: jest.fn(),
  reset: jest.fn(),
  setParams: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
} as unknown as NavigationProp<any>;

describe('LoginScreen', () => {
  it('renders login form elements correctly', () => {
    const {getByText, getByLabelText} = render(
      <NavigationContainer>
        <LoginScreen navigation={mockNavigation} />
      </NavigationContainer>,
    );

    // Check if the email and password input fields and buttons are rendered
    expect(getByLabelText('Email')).toBeTruthy();
    expect(getByLabelText('Password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
    expect(getByText("Don't have an account? Sign up")).toBeTruthy();
  });

  it('navigates to Signup screen when "Sign up" button is pressed', () => {
    const {getByText} = render(
      <NavigationContainer>
        <LoginScreen navigation={mockNavigation} />
      </NavigationContainer>,
    );

    const signUpButton = getByText("Don't have an account? Sign up");
    fireEvent.press(signUpButton);

    // Check if navigation to Signup screen is triggered
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Signup');
  });
});
