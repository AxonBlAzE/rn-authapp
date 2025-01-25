# Overview

This is a simple React Native app that implements authentication screens (Login and Signup) with form validation. It also includes a fully automated CI/CD pipeline using GitHub Actions to run tests, linting, and generate Android builds.

# Features

## 1. Authentication Screens:

- Login screen with email and password fields.
- Signup screen with email, password, and confirm password fields.
- Form validation using Formik and Yup.
- Navigation between screens using react-navigation.

## 2. State Management:

Authentication state is managed using React Context API.

## 3. CI/CD Pipeline:

- Automated linting and testing on every push or pull request to main or develop branches.
- Automated Android build generation for release APKs.

# Setup

## Prerequisites

- Node.js (v18 or later)
- Yarn
- Android Studio (for Android builds)
- Java Development Kit (JDK) (v17 or later)

# Installation

## 1. Clone the repository

```bash
git clone https://github.com/AxonBlAzE/rn-authapp.git
cd rn-authapp
```

## 2. Install dependencies

```bash
yarn install
```

# Running the app locally

## For Android

### 1. Start the Metro server

```bash
npx react-native start
```

### 2. Run the app

```bash
npx react-native run-android
```

## For iOS

### 1. Start the Metro server

```bash
npx react-native start
```

### 2. Run the app

```bash
npx react-native run-ios
```

# Testing

## Run tests

There are some basic tests written for the two authentication screens (Login and Sign Up). To run the tests, use the following command:

```bash
yarn test
```

or

```bash
npm test
```

# CI/CD Pipeline

## Tools Used

1. **GitHub Actions**: Automates testing, linting, and build processes.
2. **Gradle**: Used for building Android APKs.
3. **Jest**: Testing framework for React Native.
4. **ESLint**: Linting tool to ensure code quality.

## Workflow Triggers

The CI/CD pipeline is triggered on the following events:

- Push to main or develop branches.
- Pull requests targeting main or develop.

## Workflow Steps

### Test Job:

- Runs linting (yarn lint) to check code quality.
- Runs unit tests (yarn test) to validate functionality.

### Android Build Job:

- Builds a release APK using Gradle.
- Uploads the APK as an artifact.

# Extending the CI/CD Pipeline

To extend the pipeline, modify the .github/workflows/ci.yml file:

- Add New Jobs: Add new jobs for additional platforms like iOS.
- Custom Triggers: Modify the on section to trigger workflows on specific branches or tags.
- Deployments: Add deployment steps to distribute builds to services like Firebase App Distribution or TestFlight.
