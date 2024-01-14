import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./store";
import Toast from "react-native-toast-message";
import { AppRegistry } from "react-native";
// import messaging from '@react-native-firebase/messaging';
import { useEffect } from "react";
import * as Font from "expo-font";
export default function App() {

  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }
  // useEffect(()=>{
  //     if(requestUserPermission()){
  //       messaging().getToken().then(token=>{
  //       console.log("tokennnnnnnnn", token)
  //       })
  //     }else{
  //       console.log("repo request token is falseeeeeeeeeeeeeeeee", authStatus)
  //     }
  //     messaging()
  //     .getInitialNotification()
  //     .then(async (remoteMessage) => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //       }
  //     });
  //     messaging().onNotificationOpenedApp(remoteMessage => {
  //       console.log(
  //         'Notification caused app to open from background state:',
  //         remoteMessage.notification,
  //       );
  //     });
  //     messaging().setBackgroundMessageHandler(async remoteMessage => {
  //       console.log('Message handled in the background!', remoteMessage);
  //     });
  //     const unsubscribe = messaging().onMessage(async remoteMessage => {
  //       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //     });
  
  //     return unsubscribe;
  //   },[])

  Font.loadAsync({
    // Poppins: require("../../assets/fonts/Poppins-Bold.ttf"),
    Poppins: require("./assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <Provider store={store}>
      <AppNavigator />
      <Toast />
    </Provider>
  );
}
