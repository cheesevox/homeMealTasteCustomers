import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const DishCard = ({ item }) => {
  return (
    <View style={styles.cartcard}>
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 20,
        }}
        source={{ uri: item.item?.image }}
      />
      <View style={{ marginLeft: 20, gap: 15 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          <Ionicons name="fast-food-outline" size={24} />: {item.item?.name}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          <Ionicons name="grid-outline" size={24} /> :{item.item?.dishType.name}
        </Text>
      </View>
    </View>
  );
};

export default DishCard;

const styles = StyleSheet.create({
  cartcard: {
    width: "100%",
    display: "flex",
    marginVertical: 10,
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
});
