import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./store";
import Toast from "react-native-toast-message";
import { AppRegistry } from "react-native";
import { useEffect } from "react";
import messaging from "@react-native-firebase/messaging";
import * as Font from "expo-font";
export default function App() {
  // useEffect(() => {
  //   const unsubscribeOnTokenRefresh = messaging().onTokenRefresh((token) => {
  //     console.log('Device Token:', token);
  //   });

  //   return () => unsubscribeOnTokenRefresh();
  // }, []);
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
