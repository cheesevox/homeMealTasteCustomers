import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./store";
import Toast from "react-native-toast-message";
import { AppRegistry } from "react-native";
import messaging from '@react-native-firebase/messaging';
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { firebase } from '@react-native-firebase/app';
import { initializeMessaging } from './src/firebaseConfig'; // Import initializeMessaging function
import LoginScreen from "./src/screens/LoginScreen";
import PushNotification from "react-native-push-notification";
import auth from '@react-native-firebase/auth';
export default function App() {

  // const initializeFirebase = () => {
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp({
  //       apiKey: 'AIzaSyCZ7jSSqGNXqUqHHzT0ozPKMja0Hay3GjY',
  //       projectId: 'homemealtaste-2f322',
  //       appId: '1:62879434393:android:27fcd3e0b85c82d7e5da08',
  //       databaseURL: 'https://console.firebase.google.com/u/1/project/homemealtaste-2f322/database/homemealtaste-2f322-default-rtdb/data/~2F',
  //       messagingSenderId: '62879434393'
  //     });
  //   }
  // };

  // PushNotification.configure({
  //   onNotification: function (notification) {
  //     console.log('Notification received:', notification);
  //   },
  // });

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  useEffect(() => {
    if (requestUserPermission()) {
      messaging().getToken().then(token => {
        // console.log("tokennnnnnnnn", token)
      })
    } else {
      console.log("repo request token is falseeeeeeeeeeeeeeeee", authStatus)
    }
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
      const { title, body } = remoteMessage.data;
    });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('HOME MEAL TASTE!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, [])
  Font.loadAsync({
    Poppins: require("./assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <Provider store={store}>
      <AppNavigator />
      <Toast />
    </Provider>
  );
}
