import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SignupScreen from '../src/screens/SignupScreen';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';

const mockNavigation: Partial<NavigationProp<any>> = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  dispatch: jest.fn(),
  reset: jest.fn(),
  setParams: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
};

describe('SignupScreen', () => {
  it('renders signup form elements correctly', () => {
    const {getByLabelText, getByText} = render(
      <NavigationContainer>
        <SignupScreen navigation={mockNavigation as NavigationProp<any>} />
      </NavigationContainer>,
    );

    // Check if form elements exist
    expect(getByLabelText('Email')).toBeTruthy();
    expect(getByLabelText('Password')).toBeTruthy();
    expect(getByLabelText('Confirm Password')).toBeTruthy();
    expect(getByText('Sign Up')).toBeTruthy();
    expect(getByText('Already have an account? Login')).toBeTruthy();
  });

  it('navigates to Login screen when "Login" button is pressed', () => {
    const {getByText} = render(
      <NavigationContainer>
        <SignupScreen navigation={mockNavigation as NavigationProp<any>} />
      </NavigationContainer>,
    );

    const loginButton = getByText('Already have an account? Login');
    fireEvent.press(loginButton);

    // Check if navigation to Login screen is triggered
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
  });
});
