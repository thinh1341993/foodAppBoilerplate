/* eslint-disable react/display-name */
import { hasParent } from "mobx-state-tree"
/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import {
  Browse01Screen,
  Browse02Screen,
  Browse03Screen,
  CheckoutScreen,
  SetLanguageScreen,
  SearchScreen,
  SettingScreen,
  Categories01Screen,
  Categories02Screen,
  FavoritesScreen,
  FilterScreen,
  PaymentScreen,
  ProductDetailScreen,
  ShoppingCartScreen,
  SuccessScreen,
  OrdersDeliveryScreen,
  OrdersPickupsScreen,
  OrdersScreen,
  NotificationsScreen,
  AccountScreen,
} from "../screens"
import screens from "./screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements"
import { color } from "../theme"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */

// const screens = {screens}
// export type PrimaryParamList = screens

// Documentation: https://github.com/software-mansion/react-native-screens/tree/master/native-stack
const Stack = createNativeStackNavigator()

export function HomeBottomTab() {
  return (
    <Tab.Navigator
      initialRouteName={screens.Browse02Screen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName
          if (route.name === screens.Browse02Screen) {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name === screens.OrdersScreen) {
            iconName = focused ? "notifications" : "notifications-outline"
          } else if (route.name === screens.FavoritesScreen) {
            iconName = focused ? "ios-people-circle" : "ios-people-circle-outline"
          } else if (route.name === screens.NotificationsScreen) {
            iconName = focused ? "ios-people-circle" : "ios-people-circle-outline"
          } else {
            iconName = focused ? "person" : "person-outline"
          }
          return <Icon name={iconName} size={25} type="ionicon" color={color.text} />
        },
      })}
      barStyle={{ backgroundColor: color.main }}
      activeColor={color.text}
    >
      <Tab.Screen name={screens.Browse02Screen} component={Browse02Screen} />
      <Tab.Screen name={screens.OrdersScreen} component={OrdersScreen} />
      <Tab.Screen name={screens.FavoritesScreen} component={FavoritesScreen} />
      <Tab.Screen name={screens.NotificationsScreen} component={NotificationsScreen} />
      <Tab.Screen name={screens.AccountScreen} component={AccountScreen} />
    </Tab.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator()

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name={screens.HomeBottomTab} component={HomeBottomTab} />
      <Stack.Screen name={screens.Browse01Screen} component={Browse01Screen} />
      <Stack.Screen name={screens.Browse03Screen} component={Browse03Screen} />
      <Stack.Screen name={screens.CheckoutScreen} component={CheckoutScreen} />
      <Stack.Screen name={screens.PaymentScreen} component={PaymentScreen} />
      <Stack.Screen name={screens.ProductDetailScreen} component={ProductDetailScreen} />
      <Stack.Screen name={screens.SearchScreen} component={SearchScreen} />
      <Stack.Screen name={screens.SetLanguageScreen} component={SetLanguageScreen} />
      <Stack.Screen name={screens.SettingScreen} component={SettingScreen} />
      <Stack.Screen name={screens.ShoppingCartScreen} component={ShoppingCartScreen} />
      <Stack.Screen name={screens.SuccessScreen} component={SuccessScreen} />
      <Stack.Screen name={screens.Categories01Screen} component={Categories01Screen} />
      <Stack.Screen name={screens.Categories02Screen} component={Categories02Screen} />
      <Stack.Screen name={screens.FilterScreen} component={FilterScreen} />
      <Stack.Screen name={screens.OrdersDeliveryScreen} component={OrdersDeliveryScreen} />
      <Stack.Screen name={screens.OrdersPickupsScreen} component={OrdersPickupsScreen} />
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
