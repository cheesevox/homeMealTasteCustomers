import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { createOrderUser } from "../Api";
import Toast from "react-native-toast-message";
import HeaderComp from "./HeaderComp";

const OrderCartScreen = ({ navigation, route }) => {
  const { item } = route.params || {};
  const user = useSelector((state) => state.user.user);
  const [quantity, setQuantity] = useState(1);
  const [values, setValues] = useState({
    customerId: user.customerId,
    mealSessionId: item?.mealSessionId,
    quantity: quantity,
  });
  const createOrder = () => {
    createOrderUser({ ...values, quantity: quantity })
      .then(() => {
        Toast.show({
          type: "success",
          text1: "Home Meal Taste",
          text2: "Create Order Completed.",
        });
      })
      .catch(() => {
        Toast.show({
          type: "success",
          text1: "Home Meal Taste",
          text2: "Create Order Failed.",
        });
      });
  };
  const increase = () => {
    if (quantity < item.remainQuantity) {
      setQuantity(quantity + 1);
    }
  };
  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };
  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartcard}>
        <View style={{ flexDirection: "row", width: "100%", height: 120 }}>
          <Image
            source={{ uri: item?.mealDtoForMealSession?.image }}
            style={{
              width: "30%",
              height: "100% ",
              resizeMode: "cover",
              borderRadius: 20,
            }}
          />
          <View
            style={{
              justifyContent: "center",
              flexDirection: "column",
              marginLeft: 20,
              width: "60%",
            }}
          >
            <Text style={styles.textItem}>
              {item?.mealDtoForMealSession?.name}
            </Text>
            <Text style={styles.textItem}>
              Description: {item?.mealDtoForMealSession.description}
            </Text>
            <Text>Booking Slot : {item.remainQuantity}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* <Text style={styles.textItem}>Price: {item.price}</Text> */}
            </View>
            <View style={styles.actionButton}>
              <TouchableOpacity onPress={() => increase()}>
                <Ionicons
                  name="add-circle-outline"
                  size={25}
                  color={Colors.black}
                ></Ionicons>
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                {quantity}
              </Text>
              <TouchableOpacity onPress={() => decrease()}>
                <Ionicons
                  name="remove-circle-outline"
                  size={25}
                  color={Colors.black}
                ></Ionicons>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#F2F2F2", flex: 1 }}>
      <HeaderComp label="Cart" onBack={() => navigation.goBack()} />
      <ScrollView
        style={{
          padding: 20,
        }}
      >
        {item === undefined ? null : quantity === 0 ? (
          ""
        ) : (
          <CartCard item={item} />
        )}
      </ScrollView>
      <View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#f7e4ad",
            borderTopLeftRadius: 36,
            borderTopRightRadius: 36,
            padding: 20,
            paddingTop: 30,
            display:
              item === undefined ? "none" : quantity === 0 ? "none" : "block",
          }}
        >
          {/* <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Text>
                Subtotal
              </Text>
              <Text>
                {item.price}
              </Text>
            </View> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Order Total
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {item?.price * quantity} VND
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                // handleCreateOrder();
                createOrder();
                navigation.navigate("CustomerHome", { user: user });
              }}
              style={{
                backgroundColor: "#FFAB01",
                borderRadius: 29,
                paddingVertical: 18,
                marginTop: 30,
                width: "80%",
                alignItems: "center",
              }}
              disabled={quantity === 0}
            >
              <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
                Order This Meal
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textItem: {
    fontWeight: "bold",
    fontSize: 17,
  },

  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartcard: {
    borderRadius: 20,
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  titleText: {
    fontWeight: "600",
    justifyContent: "center",
    fontSize: 26,
    alignContent: "center",
    textAlign: "center",
    color: "#e65332",
    borderColor: "white",
    backgroundColor: "#fab3a2",
    fontWeight: "bold",
    marginTop: 32,
    width: "40%",
    borderRadius: 20,
    borderWidth: 2,
  },
  actionButton: {
    width: "100%",
    flexDirection: "row",
    gap: 15,
    justifyContent: "flex-end",
    alignContent: "center",
  },
});
export default OrderCartScreen;
