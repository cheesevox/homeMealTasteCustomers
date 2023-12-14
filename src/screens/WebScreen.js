import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import 'react-native-url-polyfill/auto';

const WebScreen = ({ route, navigation }) => {
  const { link } = route.params;
  //  <WebView source={{ uri: link }} style={{ flex: 1 }}
  return (
    <WebView
      source={{ uri: link }}
      style={{ flex: 1 }}
      onNavigationStateChange={(navState) => {
        const isInitialURL = navState.url === "";
        const isBackNavigation = navState.canGoBack && !navState.canGoForward;
        // const isResponseLink = navState.url.
        // toLowerCase().
        // includes("https://homemealtaste.azurewebsites.net/api/Payment/get-payment-return?vnp_Amount=4000000&vnp_BankCode=NCB&vnp_BankTranNo=VNP14233790&vnp_CardType=ATM&vnp_OrderInfo=21&vnp_PayDate=20231211014459&vnp_ResponseCode=00&vnp_TmnCode=V25Y8STO&vnp_TransactionNo=14233790&vnp_TransactionStatus=00&vnp_TxnRef=638378306750277018&vnp_SecureHash=48d558ff85312386614f959521c60c1afbb6aea4c76d8004f739772f6a3b267bd251c1392c7182ee37bfc8d5767fe42c4439d51a846a79b61d47cfe1f685b0e2".toLowerCase());
        // const isResponseLink = navState.url.includes("https://home
        // mealtaste.azurewebsites.net/api/Payment/get-payment-return?vnp_Amount=4000000&
        // vnp_BankCode=NCB&vnp_BankTranNo=VNP14233790&vnp_CardType=ATM&vnp_OrderInfo=21&vnp_PayDate=20231211014459&
        // vnp_ResponseCode=00&vnp_TmnCode=V25Y8STO&
        // vnp_TransactionNo=14233790&
        // vnp_TransactionStatus=00&
        // vnp_TxnRef=638378306750277018&
        // vnp_SecureHash=48d558ff85312386614f959521c60c1afbb6aea4c76d8004f739772f6a3b267bd251c1392c7182ee37bfc8d5767fe42c4439d51a846a79b61d47cfe1f685b0e2");
        // console.log("REPOSSSSSSSSSSSSS L:Ink" , isResponseLink)
        const urlSearchParams = new URLSearchParams(navState.url);
        const responseCode = urlSearchParams.get("vnp_ResponseCode");
        if (isInitialURL && isBackNavigation) {
          navigation.goBack();
        } else if (responseCode === "00") {
          // Navigate back to the previous screen when vnp_ResponseCode is 00
          navigation.navigate("UserProfile");
        } else if(responseCode === "24"){
          navigation.goBack();
        }
      }}
    />
  );
};

export default WebScreen;

const styles = StyleSheet.create({});
