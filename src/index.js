import { AppRegistry } from "react-native";
import messaging from "@react-native-firebase/messaging";
import App from "./App";
import { name as appName } from "./app.json";
import { initializeApp } from "firebase/app";

AppRegistry.registerComponent(appName, () => App);
