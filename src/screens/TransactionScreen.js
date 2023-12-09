import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllTransactionByUserId } from "../Api";
import { useSelector } from "react-redux";

export default function TransactionScreen() {
  const user = useSelector((state) => state.user.user);
  const [transaction, setTransaction] = useState([]);
  const fetchAllTransactionByUserId = () => {
    getAllTransactionByUserId(user.userId).then((res) => {
      setTransaction(res);
    });
  };
  useEffect(() => {
    fetchAllTransactionByUserId();
  }, [user.userId]);
  return (
    <View>
      <Text>TransactionScreen</Text>
    </View>
  );
}
