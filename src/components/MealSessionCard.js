import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllMealInSessionID } from "../Api";
import FoodCard from "./FoodCard";
import { ScrollView } from "react-native";
import { item } from "../Constant";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

export default function MealSessionCard({mealSession}) {
  const navigation = useNavigation();
  const [allMeal, setAllMeal] = useState([]);
  const fetchAllMeal = ()=>{
    getAllMealInSessionID(sessionId).then((res)=>{
      console.log("trong trang meal sesison carddddd",sessionId)
      setAllMeal(res)
    })
  }
  useEffect(()=>{
    fetchAllMeal()
  },[])

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchAllMeal();
      console.log("Data refreshed!");
    });

    // Clean up the listener when the component is unmounted
    return unsubscribe;
  }, [navigation]);

  return (
        // <Text key={index}>{item.mealDtoForMealSession?.name}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
          mealSession?.map((item,index)=>(
            <FoodCard item={item} key={index}/>
          ))
          }
        </ScrollView>
  );
}