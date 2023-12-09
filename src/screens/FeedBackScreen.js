import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import * as Icon from "react-native-feather";
import { imageorder, item } from "../Constant";
import { Ionicons } from "@expo/vector-icons";
import {
  getOrderByID,
  createFeedBackOrder,
  getAllFeedbackByKitchenId,
} from "../Api";
import { useDispatch, useSelector } from "react-redux";
import HeaderComp from "./HeaderComp";

export default function FeedBackScreen({ navigation, route }) {
  const user = useSelector((state) => state.user.user);
  console.log("usewr à", user);
  const [orderdetail, setOrderdetail] = useState([]);
  const [description, setDescription] = useState("");
  const handleDescriptionChange = (text) => {
    setDescription(text);
  };
  const { item } = route.params;
  console.log("Item là", item);
  const [feedback, setfeedback] = useState([]);
  const fectAllFeedbackByKitchenId = () => {
    getAllFeedbackByKitchenId(
      item?.mealSessionDto2?.mealDto2?.kitchenDto2?.kitchenId
    ).then((res) => {
      setfeedback(res);
    });
  };

  useEffect(() => {
    fectAllFeedbackByKitchenId();
  }, [item?.mealSessionDto2?.mealDto2?.kitchenDto2?.kitchenId]);
  const [values, setValues] = useState({
    customerId: user.customerId,
    kitchenId: item?.mealSessionDto2?.mealDto2?.kitchenDto2?.kitchenId,
    description: description,
  });
  const createFeedback = () => {
    createFeedBackOrder(values)
      .then(() => {
        Toast.show({
          type: "success",
          text1: "Home Meal Taste",
          text2: "Feedback Completed.",
        });
        navigation.navigate("CustomerHome", { user: user });
      })
      .catch(() => {
        Toast.show({
          type: "error",
          text1: "Home Meal Taste",
          text2: "Feedback Failed.",
        });
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp
        label="Order Information  "
        onBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.body}>
        <View>
          {/* order id */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Order : #{item?.orderId}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                padding: 10,
                paddingHorizontal: 20,
                color:
                  item?.status == "PAID"
                    ? "green"
                    : "CANCELLED"
                    ? "gray"
                    : "blue",
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              {item?.status}
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              minHeight: 150,
              padding: 10,
              borderRadius: 20,
              marginVertical: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "white",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: "30%",
                height: "100%",
                borderRadius: 20,
                resizeMode: "cover",
              }}
              source={{ uri: item?.mealSessionDto2?.mealDto2?.image }}
            />
            <View style={{ width: "65%", gap: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                <Ionicons name="restaurant-outline" size={25} /> :
                {item?.mealSessionDto2?.mealDto2?.name}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                <Ionicons name="home-outline" size={25} /> :
                {item?.mealSessionDto2?.mealDto2?.kitchenDto2?.name}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                <Ionicons name="time-outline" size={25} /> : Time : {item?.time}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              minHeight: 150,
              padding: 10,
              borderRadius: 20,
              marginVertical: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "white",
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%", gap: 10 }}>
              <View
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>
                  <Ionicons name="person-outline" size={25} />
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  {item?.customerDto2?.name}
                </Text>
              </View>
              <View
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>
                  <Ionicons name="phone-portrait-outline" size={25} />
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  {item?.customerDto2?.phone}
                </Text>
              </View>

              <View
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  Booked Slot :
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  {item?.quantity}
                </Text>
              </View>
              <View
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  Total Price :
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  {item?.totalPrice} VND
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ borderRadius: 20, marginVertical: 10, gap: 10 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 25, marginHorizontal: 10 }}
            >
              Feedback
            </Text>
          </View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: "white",
              height: 200,
            }}
          >
            <View>
              <TextInput
                multiline={true}
                numberOfLines={3}
                placeholder="Enter your feedback ..."
                style={{
                  padding: 10,
                  borderWidth: 0,
                }}
                onChangeText={(text) =>
                  setValues({ ...values, description: text })
                }
              ></TextInput>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => createFeedback()}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFAB01",
            borderRadius: 20,
            width: "80%",
            paddingVertical: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Feedback</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    padding: 10,
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
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
