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
} from "../Api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { FlatList } from "react-native";
import HeaderComp from "./HeaderComp";
import MealSessionCard from "../components/MealSessionCard";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import FoodCard from "../components/FoodCard";
import FeedbackCard from "../components/FeedbackCard";
const ChefHomeViewScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { kitchenId } = route.params;
  console.log("item meal", kitchenId);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Menu In Day" },
    { key: "second", title: "Feedback" },
  ]);
  const FirstRoute = () => (
    <View
      style={{
        backgroundColor: "#F2F2F2",
        height: "100%",
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 26,
          }}
        >
          Menu In Day
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
          {/* {item?.price} VND */}
        </Text>
      </View>
      <FlatList
        scrollEnabled
        numColumns={2}
        data={meal}
        renderItem={(item, index) => <FoodCard item={item} key={index} />}
        keyExtractor={(item, index) => item.mealSessionId}
      ></FlatList>
    </View>
  );

  const SecondRoute = () => (
    <View
      style={{
        backgroundColor: "#F2F2F2",
        height: "100%",
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 26,
          }}
        >
          Feedback
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
          {/* {item?.price} VND */}
        </Text>
      </View>
      <FlatList
        scrollEnabled
        data={feedback?.slice().reverse()}
        renderItem={(item, index) => <FeedbackCard item={item} key={index} />}
        keyExtractor={(item, index) => item.feedbackId}
      ></FlatList>
    </View>
  );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const [meal, setMeal] = useState();
  const [dish, setDish] = useState([]);
  const [kitchen, setKitchen] = useState({});
  const [feedback, setFeedback] = useState([]);
  const fetchAllMealSessionByKitchenId = () => {
    getAllMealSessionApprovedQuantityMoreThanZero(kitchenId).then((res) => {
      setMeal(res);
    });
  };
  const fetchAllFeedbackByKitchenId = () => {
    getAllFeedbackByKitchenId(kitchenId).then((res) => {
      setFeedback(res);
    });
  };
  const fetchKitchenByKitchenId = () => {
    getKitchenByKitchenId(kitchenId).then((res) => {
      setKitchen(res);
    });
  };
  useEffect(() => {
    fetchAllMealSessionByKitchenId();
    fetchKitchenByKitchenId();
    fetchAllFeedbackByKitchenId();
  }, [kitchenId]);
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        position: "relative",
      }}
    >
      <HeaderComp label="Chef Home" onBack={() => navigation.goBack()} />
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
          source={require("../../assets/images/imagekitchen2.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        ></Image>
        <View
          style={{
            width: "90%",
            padding: 10,
            borderRadius: 20,
            position: "absolute",
            top: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            // backgroundColor: "white",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="person-outline"
              size={20}
              color="white"
              style={{ fontWeight: "500" }}
            />
            <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>
              : {kitchen?.userDtoKitchenResponseModel?.username}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Ionicons name="phone-portrait-outline" size={20} color="white" />
            <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>
              : {kitchen?.userDtoKitchenResponseModel?.phone}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Ionicons name="business" size={20} color="white" />
            <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>
              : {kitchen?.address}
            </Text>
          </View>
        </View>
      </View>
      {/* menu */}
      <View
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          backgroundColor: "#F2F2F2",
          height: "80%",
          top: -70,
          // display: "none",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        ></View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: "100%" }}
          tabBarOptions={{
            activeTintColor: "white", // Change this to your desired color
            tabBarStyle: { backgroundColor: "black" }, // Change this to your desired background color
          }}
          sceneContainerStyle={{ backgroundColor: "white" }} // Change this to your desired color
          style={{
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: "white",
          }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{ backgroundColor: "white" }}
              labelStyle={{ color: "black" }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ChefHomeViewScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});

{
  /* <View
style={{
  flexDirection: "row",
  justifyContent: "space-between",
}}
>
<Text
  style={{
    fontWeight: "bold",
    fontSize: 26,
  }}
>
  Menu In Day
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
  {/* {item?.price} VND */
}
// </Text>
// </View>
{
  /* <FlatList */
}
// scrollEnabled
// numColumns={2}
// data={meal}
// renderItem={(item, index) => <FoodCard item={item} key={index} />}
// keyExtractor={(item, index) => item.mealSessionId}
// ></FlatList> */}
