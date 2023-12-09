import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  TouchableOpacity,
  StepperInput,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const FoodDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const { qty, setQty } = React.useState(1);
  console.log(item);
  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 140,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
            // marginBottom: 130,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>

        {/* Recipe Name */}
        <Text style={{ marginTop: 150, fontSize: 28, fontWeight: "bold" }}>
          {item.name}
        </Text>

        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Recipe Description */}
            <Text style={{ fontSize: 20, marginVertical: 10 }}>
              {item.description}
            </Text>

            {/* Recipe Extra Details */}

            <View
              style={{
                flexDirection: "row",
                height: 100,
                justifyContent: "space-between",
                // width: "100%",
                // backgroundColor: "green",
              }}
            >
              {/* <View
								style={{
									flexDirection:"column-reverse",
									backgroundColor: "rgba(255, 0, 0, 0.38)",
									// paddingHorizontal: 16,
									paddingVertical: 10,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
								}}
							>
								<Text style={{ fontSize: 40 }}>🍲</Text>
								<Text style={{ fontSize: 20, fontWeight: 400 }}>
									{item.dish0}
								</Text>
							</View>
							 */}
              <View
                style={{
                  backgroundColor: "rgba(255, 0, 0, 0.38)",
                  // paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 8,
                  alignItems: "center",
                  width: 100,
                }}
              >
                <Text style={{ fontSize: 40 }}>🍲</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.dish0}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(135, 206, 235, 0.8)",
                  // paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 8,
                  alignItems: "center",
                  width: 100,
                  // marginHorizontal: 24,
                }}
              >
                <Text style={{ fontSize: 40 }}>🥘</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.dish1}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(255, 165, 0, 0.48)",
                  // paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 8,
                  alignItems: "center",
                  width: 100,
                }}
              >
                <Text style={{ fontSize: 40 }}>🍱</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.dish2}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 100,
                marginTop: 15,
                // width: "100%",
                // backgroundColor: "green",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(255, 0, 0, 0.38)",
                  // paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 8,
                  alignItems: "center",
                  width: 100,
                }}
              >
                <Text style={{ fontSize: 40 }}>🍛</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.dish3}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(135, 206, 235, 0.8)",
                  // paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 8,
                  alignItems: "center",
                  width: 100,
                  // marginHorizontal: 24,
                }}
              >
                <Text style={{ fontSize: 40 }}>🍚</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.dish4}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(255, 165, 0, 0.48)",
                  // paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 8,
                  alignItems: "center",
                  width: 100,
                }}
              >
                <Text style={{ fontSize: 40 }}>🥗</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.dish5}
                </Text>
              </View>
            </View>
            {/* Recipe Ingredients  */}

            <TouchableOpacity
              onPress={() => navigation.navigate("OrderCart")}
              style={{
                backgroundColor: "#f96163",
                borderRadius: 18,
                paddingVertical: 18,
                marginTop: 15,
                marginRight: 50,
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
                Add To Cart
              </Text>
            </TouchableOpacity>

            {/* Recipe Steps */}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default FoodDetailsScreen;

const styles = StyleSheet.create({});
