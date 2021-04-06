import React from "react"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import {
  SignInScreen,
  SignUpScreen,
  ForgotPasswordScreen,
  VerificationCodeScreen,
  OnboardingScreen,
} from "../screens"
import screens from "./screens"
const Stack = createNativeStackNavigator()

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      initialRouteName={screens.SignInScreen}
    >
      <Stack.Screen name={screens.SignInScreen} component={SignInScreen} />
      <Stack.Screen name={screens.SignUpScreen} component={SignUpScreen} />
      <Stack.Screen name={screens.ForgotPasswordScreen} component={ForgotPasswordScreen} />
      <Stack.Screen name={screens.VerificationCodeScreen} component={VerificationCodeScreen} />
      <Stack.Screen name={screens.OnboardingScreen} component={OnboardingScreen} />
    </Stack.Navigator>
  )
}