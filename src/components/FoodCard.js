import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  StepperInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FoodCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 15,
        width: "50%",
        marginBottom: 20,
      }}
    >
      <Pressable
        onPress={() => navigation.navigate("MealDetail", { item: item.item })}
        style={{
          backgroundColor: colors.COLOR_LIGHT,
          shadowOpacity: 0.1,
          shadowRadius: 7,
          borderRadius: 20,
          padding: 10,
          width: "100%",
          // backgroundColor:'#f5984c'
        }}
      >
        {/* //uri // */}
        <View
          style={{
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <Image
            source={{ uri: item.item?.mealDtoForMealSession?.image }}
            style={{
              height: 100,
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          ></Image>
        </View>
        {/* <Text>{item.name}</Text> */}
        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {item.item?.mealDtoForMealSession?.name}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "600",
            }}
          >
            Price: {item.item?.price} VND{" "}
          </Text>
          <Text
            style={{
              fontWeight: "600",
            }}
          >
            Booking Slot : {item.item?.quantity - item.item?.remainQuantity} /{" "}
            {item.item?.quantity}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({});
