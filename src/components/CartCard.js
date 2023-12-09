import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Icon,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { imageorder } from "../Constant";
import { useNavigation } from "@react-navigation/native";

const CartCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cartcard}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: "30%",
              height: 100,
              borderRadius: 10,
              resizeMode: "cover",
            }}
            source={{ uri: item?.mealSessionDto2?.mealDto2?.image }}
          />
          <View
            style={{
              width: "65%",
              flexDirection: "column",
              padding: 15,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {/* name order  */}
              {item?.mealSessionDto2?.mealDto2?.name}
            </Text>
            <Text>Price: {item?.totalPrice}</Text>
            <Text>Date: {item?.time}</Text>
            <Text>Booked Slot : {item?.quantity}</Text>
            <Text
              style={{
                padding: 1,
                fontWeight: 700,
                borderRadius: 5,
                borderColor: "gray",
              }}
            >
              {item?.status}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginRight: 20,
          alignItems: "center",
          padding: 10,
          borderRadius: 25,
          backgroundColor: "#FFAB01",
        }}
      >
        <TouchableOpacity
          style={{}}
          onPress={() => navigation.navigate("Feedback", { item })}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            Review
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cartcard: {
    borderRadius: 20,
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  actionButton: {
    width: 80,
    height: 30,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
