/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your PrimaryNavigator) which the user
 * will use once logged in.
 */
import React from "react"
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"

import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { load as loadToken } from "../utils/storage"
import { LoadingScreen } from "../screens"
import screens from "./screens"
import { AppNavigator } from "./primary-navigator"
import { AuthStack } from "./auth-navigator"

export const AuthContext = React.createContext(null)

const Stack = createNativeStackNavigator()

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            role: action.role,
            isLoading: false,
          }
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            role: action.role,
          }
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            role: null,
          }
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      role: null,
    },
  )

  React.useEffect(() => {
    // // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken
      let role
      try {
        userToken = await loadToken("accessToken")
        role = await loadToken("role")
      } catch (e) {
        // Restoring token failed
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken, role })
    }

    bootstrapAsync()
  }, [])

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        console.log(data)
        dispatch({ type: "SIGN_IN", token: data.token, role: data.role })
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
    }),
    [],
  )

  const RootStack = () => {
    if (state.isLoading) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name={screens.Loading}
            component={LoadingScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )
    } else if (state.userToken) {
      return AppNavigator()
    } else {
      return AuthStack()
    }
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer {...props} ref={ref}>
        <RootStack />
      </NavigationContainer>
    </AuthContext.Provider>
  )
})

RootNavigator.displayName = "RootNavigator"
