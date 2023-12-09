import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodListScreen from "../screens/FoodListScreen";
import FoodDetailsScreen from "../screens/FoodDetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import OrderCartScreen from "../screens/OrderCartScreen";
import WalletScreen from "../screens/WalletScreen";
import PaymentScreen from "../screens/PaymentScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import FeedBackScreen from "../screens/FeedBackScreen";

// import Ionicons from "@expo/vector-icons";
import BottomTabNavigator from "../screens/BottomTabNavigation";
import MealDetailScreen from "../screens/MealDetailScreen";
import OrderScreen from "../screens/OrderScreen";

import MealSession from "../screens/MealSession";
import linking from "../linking";

import WebScreen from "../screens/WebScreen";
import EditUserProfileScreen from "../screens/EditUserProfileScreen";
import ChefHomeViewScreen from "../screens/ChefHomeViewScreen";
import PrivacyScreen from "../screens/PrivacyScreen";
import TransactionScreen from "../screens/TransactionScreen";

const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="CustomerHome" component={BottomTabNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="FoodList" component={FoodListScreen} />
        <Stack.Screen name="FoodDetail" component={FoodDetailsScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        <Stack.Screen name="OrderCart" component={OrderCartScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Regiter" component={RegisterScreen} />
        <Stack.Screen name="Feedback" component={FeedBackScreen} />
        <Stack.Screen name="MealSession" component={MealSession} />
        <Stack.Screen name="WebScreen" component={WebScreen} />
        <Stack.Screen name="EditProfile" component={EditUserProfileScreen} />
        <Stack.Screen name="ChefHomeView" component={ChefHomeViewScreen} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;

const styles = StyleSheet.create({});
{
  /* <Tab.Navigator
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="CustomerHome" component={BottomTabNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="FoodList" component={FoodListScreen} />
        <Stack.Screen name="FoodDetail" component={FoodDetailsScreen} />
        <Stack.Screen name="OrderCart" component={OrderCartScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Regiter" component={RegisterScreen} />
        {/* <Stack.Screen name="Order" component={OrderScreen} /> */
}

{
  /*Chef role*/
}
// </Stack.Navigator>
{
  /* <Tab.Navigator
>>>>>>> CaoVanTruong/chef
				initialRouteName="FoodList"
				screenOptions={({ router }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						let rn = router.name == "FoodList";
						if (rn == "FoodList") {
							iconName = focused ? 'foodlist' : 'home-outline'
						} else if (rn == "Order") {
							iconName = focused ? 'order' : 'setting-outline'
						} else if (rn == "Wallet") {
							iconName = focused ? 'wallet' : 'wallet-outline'
						} else if (rn == "UserProfile") {
							iconName == focused ? 'userprofile' : 'person-outline'
						}
						return <Ionicons name={iconName} size={size} color={color} />
					},
				})}>
					<Tab.Screen name="FoodList" component={FoodListScreen} options={{ tabBarBadge: 3 }} />
					{/* <Tab.Screen name="FoodList" component={FoodListScreen}/> */
}
// <Tab.Screen name="Order" component={OrderCartScreen} />
// <Tab.Screen name="Wallet" component={WalletScreen} />
// <Tab.Screen name="UserProfile" component={UserProfileScreen} />
{
  /* </Tab.Navigator> */
}
