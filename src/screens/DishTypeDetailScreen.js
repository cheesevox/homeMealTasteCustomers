import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Icon from "react-native-feather";
import { Ionicons } from "@expo/vector-icons";
import DishCard from "../components/DishCard";
import {
  getAllFeedbackByKitchenId,
  getAllMealSessionApprovedQuantityMoreThanZero,
  getAllMealSessionByKitchen,
  getDishByMealId,
  getKitchenByKitchenId,
  getSingleDishType,
} from "../Api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { FlatList } from "react-native";
import HeaderComp from "./HeaderComp";
import MealSessionCard from "../components/MealSessionCard";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import FoodCard from "../components/FoodCard";
import FeedbackCard from "../components/FeedbackCard";
const DishTypeDetailScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { dishTypeId } = route.params;
  console.log("kitchen id", dishTypeId);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Menu In Day" },
    { key: "second", title: "Feedback" },
  ]);
  const [dish, setDish] = useState({});
  const fetchSingleDishType = () => {
    getSingleDishType(dishTypeId).then((res) => {
      setDish(res);
    });
  };
  useEffect(() => {
    fetchSingleDishType();
  }, [dishTypeId]);
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        position: "relative",
      }}
    >
      <HeaderComp label={dish?.name} onBack={() => navigation.goBack()} />
      <View
        style={{
          height: "28%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Image
          source={require("../../assets/images/tomato.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        ></Image>
      </View>
      {/* menu */}
      <View
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F2F2F2",
          height: "80%",
          top: -70,
          padding: 20,
          // display: "none",
        }}
      >
        {/* <Text
          style={{
            fontFamily: "Poppins",
          }}
        >
          {dish?.name}
        </Text> */}
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 20,
          }}
        >
          <Text>{dish?.description}</Text>
        </Text>
      </View>
    </View>
  );
};

export default DishTypeDetailScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});
