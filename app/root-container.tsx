/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app or storybook.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigation, so head over there
 * if you're interested in adding screens and navigators.
 */
import "./i18n"
import "./utils/ignore-warnings"
import React, { useState, useEffect, useRef } from "react"
import { NavigationContainerRef } from "@react-navigation/native"
import { RootNavigator } from "./navigation"
import { observer } from "mobx-react-lite"

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

/**
 * This is the root component of our app.
 */
export const RootContainer = observer(function RootContainer() {
  const navigationRef = useRef<NavigationContainerRef>()
  // const { userStore } = useStores()

  // setRootNavigation(navigationRef)
  // useBackButtonHandler(navigationRef, canExit)
  // const requestUserPermission = async () => {
  //   // const authStatus = await messaging().requestPermission()
  //   // const enabled =
  //   //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //   //   authStatus === messaging.AuthorizationStatus.PROVISIONAL
  //   // if (enabled) {
  //   //   console.log("Authorization status:", authStatus)
  //   //}
  // }

  // const onReceiveMessage = async (remoteMessage) => {
  //   PushNotificationIOS.presentLocalNotification({
  //     alertBody: remoteMessage?.notification?.body,
  //     alertTitle: remoteMessage?.notification?.title,
  //   })
  // }

  // const onRemoteNotification = (notification) => {
  //   const isClicked = notification.getData().userInteraction === 1

  //   if (isClicked) {
  //     // Navigate user to another screen
  //   } else {
  //     // Do something else with push notification
  //   }
  // }
  // Kick off initial async loading actions, like loading fonts and RootStore

  // const createNotificationListeners = async () => {
  //   /*
  //    * Triggered when a particular notification has been received in foreground
  //    * */
  //   const channel = new firebase.notifications.Android.Channel(
  //     "fastercrm",
  //     "fastercrm",
  //     firebase.notifications.Android.Importance.High,
  //   ).setDescription("A natural description of the channel")
  //   const notifications = firebase.notifications()

  //   firebase.notifications().android.createChannel(channel)
  //   firebase.notifications().onNotification(async (notification) => {
  //     console.log(notification)
  //     const { title, body, notificationId } = notification
  //     let info = {}

  //     Object.keys(notification.data).forEach((key) => {
  //       if (key.includes("google")) return
  //       info = notification.data
  //     })
  //     try {
  //       if (Platform.OS === "android") {
  //         //
  //         //
  //         firebase
  //           .notifications()
  //           .displayNotification(
  //             new firebase.notifications.Notification()
  //               .setNotificationId(notificationId)
  //               .setTitle(title)
  //               .setBody(body)
  //               .setData(info)
  //               .android.setVibrate([1000])
  //               .android.setChannelId("fastercrm")
  //               .setSound("default")
  //               .android.setAutoCancel(true)
  //               .android.setPriority(firebase.notifications.Android.Priority.Max),
  //           )
  //       } else if (Platform.OS === "ios") {
  //         firebase
  //           .notifications()
  //           .displayNotification(
  //             new firebase.notifications.Notification()
  //               .setNotificationId(notificationId)
  //               .setTitle(title)
  //               .setBody(body)
  //               .setData(info),
  //           )
  //       }
  //     } catch (err) {}
  //   })
  //   /*
  //    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
  //    * */
  //   firebase.notifications().onNotificationOpened(async (notificationOpen) => {
  //     const info = notificationOpen.notification.data
  //     if (info.type === "lead") {
  //       navigationRef.current.navigate(screens.customerDetail, { item_id: info.type_id })
  //     } else if (info.type === "task") {
  //       navigationRef.current.navigate(screens.taskDetail, { item_id: info.type_id })
  //     } else {
  //       navigationRef.current.navigate(screens.webview, { url: info.type_id })
  //     }

  //     notifications.setBadge(0)
  //   })

  //   /*
  //    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
  //    * */
  //   const notificationOpen = await firebase.notifications().getInitialNotification()

  //   if (notificationOpen) {
  //     const info = notificationOpen.notification.data
  //     if (info.type === "lead") {
  //       navigationRef.current.navigate(screens.customerDetail, { item_id: info.type_id })
  //     } else if (info.type === "task") {
  //       navigationRef.current.navigate(screens.taskDetail, { item_id: info.type_id })
  //     } else {
  //       navigationRef.current.navigate(screens.webview, { url: info.type_id })
  //     }

  //     notifications.setBadge(0)
  //   }

  //   /*
  //    * Triggered for data only payload in foreground
  //    * */

  //   //process data message
  //   firebase.messaging().onMessage(async (message) => {})
  // }

  // const createNotificationChannel = () => {
  //   // Build a android notification channel
  //   const channel = new firebase.notifications.Android.Channel(
  //     "reminder", // channelId
  //     "Reminders Channel", // channel name
  //     firebase.notifications.Android.Importance.High, // channel importance
  //   ).setDescription("Used for getting reminder notification") // channel description
  //   // Create the android notification channel
  //   firebase.notifications().android.createChannel(channel)
  // }

  // const getToken = async () => {
  //   let fcmToken = await AsyncStorage.getItem("fcmToken")

  //   if (!fcmToken) {
  //     fcmToken = await firebase.messaging().getToken()
  //     if (fcmToken) {
  //       // user has a device token

  //       await AsyncStorage.setItem("fcmToken", fcmToken)
  //     }
  //   }
  //   console.log(fcmToken)
  //   await userStore.updateToken({
  //     token: fcmToken,
  //     device_name: await DeviceInfo.getDeviceName(),
  //     platform: Platform.OS,
  //     uuid: await DeviceInfo.getUniqueId(),
  //     version: await DeviceInfo.getVersion(),
  //     user_id: userStore.id,
  //   })
  // }

  // const requestPermission = async () => {
  //   try {
  //     await firebase.messaging().requestPermission()
  //     // User has authorised
  //     getToken()
  //   } catch (error) {
  //     // User has rejected permissions
  //   }
  // }

  // const checkPermission = async () => {
  //   const enabled = await firebase.messaging().hasPermission()
  //   if (enabled) {
  //     getToken()
  //   } else {
  //     requestPermission()
  //   }
  // }

  useEffect(() => {
    // createNotificationListeners()
    // checkPermission()
  }, [])

  return <RootNavigator ref={navigationRef} />
})
