import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
export default function AreaCard({ area, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("MealSession", {
          areaId: area.item?.areaId,
        });
      }}
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        width: "45%",
        margin: 10,
      }}
    >
      <Image
        source={require("../../assets/images/restaurant.jpg")}
        style={{
          width: "100%",
          height: 100,
          borderRadius: 10,
        }}
      ></Image>
      <View style={{ marginTop: 10, width: "100%" }}>
        <Text style={styles.text}>{area.item?.areaName}</Text>
        <Text>{area.item?.address}</Text>
        <Text>{area?.areaId}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
});
