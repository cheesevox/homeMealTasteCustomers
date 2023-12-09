import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const WebScreen = ({ route }) => {
  const { link } = route.params;
  //  <WebView source={{ uri: link }} style={{ flex: 1 }}
  return (
    <WebView
      source={{ uri: link }}
      style={{ flex: 1 }}
      onNavigationStateChange={(navState) => {
        const isInitialURL = navState.url === "";
        const isBackNavigation = navState.canGoBack && !navState.canGoForward;
        if (isInitialURL && isBackNavigation) {
          navigation.goBack();
        }
      }}
    />
  );
};

export default WebScreen;

const styles = StyleSheet.create({});
