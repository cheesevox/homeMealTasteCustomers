import { View, Text } from "react-native";
import React from "react";
import HeaderComp from "./HeaderComp";
import { Ionicons } from "@expo/vector-icons";

export default function PrivacyScreen({ navigation }) {
  const business = [
    {
      title: "Customers create orders with blance in the wallet system.",
    },
    {
      title:
        "Customers must recharge money from VNpay after that it will update in the customer 's wallet.",
    },
    {
      title:
        "When the chef cancels the order, the admin will refund the customer's wallet and the chef will be fined money. ",
    },
    {
      title:
        "Customers can order meals from many kitchens in the starting session.",
    },
    {
      title:
        "Customer late more than 5 minutes from the time the meal is announced ready, chef and the platform will not be responsible.",
    },
  ];
  return (
    <View>
      <HeaderComp label="Privacy" onBack={() => navigation.goBack()} />
      <View
        style={{
          height: "100%",
          padding: 10,
        }}
      >
        {business.map((item, index) => (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 18,
                lineHeight: 40,
              }}
            >
              {index + 1}.{item.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
