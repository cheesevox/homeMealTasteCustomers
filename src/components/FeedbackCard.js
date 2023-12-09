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
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FeedbackCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 15,
        width: "100%",
        marginBottom: 20,
      }}
    >
      <Pressable
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
        ></View>
        {/* <Text>{item.name}</Text> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              fontSize: 15,
              width: "100%",
              borderBottomWidth: 0.5,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>
              <Ionicons name="person" size={18} />
              <Text>{item.item?.customerDtoFeedbackReponseModel?.name}</Text>
            </Text>

            <Text style={{ color: "gray" }}>{item.item?.createDate}</Text>
          </View>
        </View>
        <View style={{ width: "100%", borderBottomWidth: 0.5 }}></View>
        <View style={{ minHeight: 80, marginTop: 10 }}>
          <Text
            style={{
              fontWeight: "400",
              color: "gray",
            }}
          >
            {item.item?.description}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default FeedbackCard;

const styles = StyleSheet.create({});
