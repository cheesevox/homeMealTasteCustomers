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
import { getDishByMealId } from "../Api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { FlatList } from "react-native";
import HeaderComp from "./HeaderComp";
const MealDetailScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { item } = route.params;
  console.log("item meal", item);
  const [meal, setMeal] = useState();
  const [dish, setDish] = useState([]);
  const fetchAllDish = () => {
    getDishByMealId(item.mealDtoForMealSession?.mealId).then((res) => {
      setDish(res.dishDto);
    });
  };

  useEffect(() => {
    fetchAllDish();
  }, [item.mealSessionId]);
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        position: "relative",
      }}
    >
      <HeaderComp label="Meal Session" onBack={() => navigation.goBack()} />
      <View
        style={{
          height: "30%",
        }}
      >
        <Image
          source={{ uri: item?.mealDtoForMealSession?.image }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
          }}
        />
      </View>
      {/* menu */}
      <View
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          backgroundColor: "#F2F2F2",
          height: "70%",
          top: -70,
          // display: "none",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
            }}
            onPress={() => {
              if (
                item &&
                item.kitchenDtoForMealSession &&
                item.kitchenDtoForMealSession.kitchenId
              ) {
                navigation.navigate("ChefHomeView", {
                  kitchenId: item.kitchenDtoForMealSession.kitchenId,
                });
              }
            }}
          >
            <Ionicons name="md-home" size={25} color="#FFAB01" />
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 20,
                color: "#FFAB01",
              }}
            >
              {item?.kitchenDtoForMealSession?.name}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "Poppins",
                }}
              >
                {item?.mealDtoForMealSession?.name}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins",
                }}
              >
                {item?.mealDtoForMealSession.description}
              </Text>
            </View>
            <TouchableOpacity
              // onPress={() => navigation.navigate("MealDetail", { item: item })}
              onPress={() => {
                dispatch(addToCart(item));
                navigation.navigate("OrderCart", { item });
              }}
              style={{
                width: 50,
                height: 50,
                backgroundColor: "orange",
                borderRadius: 28,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="cart-outline" size={25} />
              {/* <ion-icon name="cart-outline"></ion-icon> */}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontFamily: "Poppins",
            }}
          >
            Dishes :
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 26,
              paddingBottom: 36,
              marginLeft: 30,
              color: "red",
            }}
          >
            {item?.price} VND
          </Text>
        </View>
        <FlatList
          scrollEnabled
          data={dish}
          renderItem={(item, index) => <DishCard item={item} key={index} />}
          keyExtractor={(item, index) => item.dishId}
        ></FlatList>
      </View>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});
