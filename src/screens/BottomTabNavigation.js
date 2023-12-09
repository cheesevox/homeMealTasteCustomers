import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import FoodListScreen from "./FoodListScreen";
import OrderCartScreen from "./OrderCartScreen";
import UserProfileScreen from "./UserProfileScreen";
import OrderScreen from "./OrderScreen";
import { useDispatch } from "react-redux";
import { getUserInfor } from "../../slices/userSlice";
const Tab = createBottomTabNavigator();
const BottomTabNavigator = ({ route }) => {
  const dispatch = useDispatch();
  const { user } = route.params;
  useEffect(() => {
    if (user) {
      dispatch(getUserInfor(user));
    }
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "orange",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          height: "7%",
        },
        tabBarActiveTintColor: "#466fd4",
        tabBarInactiveTintColor: "white",
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={25} color={color}></Ionicons>
          ),
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: "600",
          },
        }}
        name="Home"
        component={FoodListScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={25} color={color}></Ionicons>
          ),
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: "600",
          },
        }}
        name="Cart"
        component={OrderCartScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet-outline" size={25} color={color}></Ionicons>
          ),
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: "600",
          },
        }}
        name="Order"
        component={OrderScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person-circle-outline"
              size={25}
              color={color}
            ></Ionicons>
          ),
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: "600",
          },
        }}
        name="Profile"
        component={UserProfileScreen}
      />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({});
export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabbar: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "orange",
  },
});

// tri lua///////////////////////////////////////////////////
// return (
//   <Tab.Navigator
//   // screenOptions={({route})=>{
//   //   tabBarStyle: styles.tabbar
//   // }}
//   >
//     <Tab.Screen
//       options={{
//         headerShown: false,
//         tabBarIcon: ({ color }) => (
//           <Ionicons name="home-outline" size={24} color={color}></Ionicons>
//         ),
//       }}
//       name="FoodList"
//       component={FoodListScreen}
//     />
//     <Tab.Screen
//       options={{
//         headerShown: false,
//         tabBarIcon: ({ color }) => (
//           <Ionicons name="cart-outline" size={24} color={color}></Ionicons>
//         ),
//       }}
//       name="OrderCart"
//       component={OrderCartScreen}
//     />
//     <Tab.Screen
//       options={{
//         headerShown: false,
//         tabBarIcon: ({ color }) => (
//           <Ionicons name="newspaper" size={24} color={color}></Ionicons>
//         ),
//       }}
//       name="Order"
//       component={OrderScreen}
//     />
//     <Tab.Screen
//       options={{
//         headerShown: false,
//         tabBarIcon: ({ color }) => (
//           <Ionicons
//             name="person-circle-outline"
//             size={24}
//             color={color}
//           ></Ionicons>
//         ),
//       }}
//       name="UserProfile"
//       component={UserProfileScreen}
//     />
//   </Tab.Navigator>
// );
