import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PaymentScreen = ({ navigation }) => {
  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.Text}>Link Bank</Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "blue",
            padding: 20,
          }}
        >
          Popular Bank
        </Text>
      </View>

      {/* <View style={{ alignItems:'center',justifyContent:'center'}}>
        <Text
        onPress={()=> navigation.navigate('FoodList')}
        style={{fontSize:26, fontWeight:'bold'}}
        >Home Screen</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontWeight: "600",
    justifyContent: "center",
    fontSize: 26,
    alignContent: "center",
    textAlign: "center",
    color: "#e65332",
    borderColor: "white",
    backgroundColor: "#fab3a2",
    fontWeight: "bold",
    marginTop: 40,
    width: "40%",
    borderRadius: 20,
    borderWidth: 2,
  },
});
export default PaymentScreen;
