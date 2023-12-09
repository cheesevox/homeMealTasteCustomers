import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState, useRef, useCallback } from "react";
import * as Icon from "react-native-feather";
import CartCard from "../components/CartCard";
import { getAllOrderByCutomerId } from "../Api";
import { useSelector } from "react-redux";
import HeaderComp from "./HeaderComp";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";

const OrderScreen = ({ navigation }) => {
  const [order, setOrder] = useState([]);
  const user = useSelector((state) => state.user.user);

  const fectOrderByCustomerId = () => {
    getAllOrderByCutomerId(user.userId).then((res) => {
      setOrder(res);
    });
  };

  useEffect(() => {
    fectOrderByCustomerId();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fectOrderByCustomerId();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <HeaderComp label="Order History" isHasBackIcon={false} />
      <ScrollView style={{ padding: 10 }}>
        {order
          ?.slice()
          ?.reverse()
          ?.map((item) => (
            <CartCard key={item.orderId} item={item} />
          ))}
      </ScrollView>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headder: {
    flex: 1,
  },
  secsion1: {
    flex: 0.4,
  },
  body: {
    flex: 1,
    display: "flex",
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textItem: {
    fontWeight: "bold",
    fontSize: 17,
  },

  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    flex: 1,
  },
  walletText: {
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
  Text: {
    fontWeight: "600",
    fontSize: 24,
    textAlign: "center",
    color: "#e65332",
    borderColor: "white",
    backgroundColor: "#fab3a2",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginTop: 40,
    width: "40%",
    borderRadius: 20,
    borderWidth: 2,
  },
});
