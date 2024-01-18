import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Icon,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { imageorder, order } from "../Constant";
import { useNavigation } from "@react-navigation/native";

const   CartCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cartcard}>
      <TouchableOpacity 
      onPress={() => navigation.navigate("OrderCancel",  item?.orderId )}
      >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: "30%",
              height: 100,
              borderRadius: 10,
              resizeMode: "cover",
            }}
            source={{ uri: item?.mealSessionDto2?.mealDto2?.image }}
          />
          <View
            style={{
              width: "65%",
              flexDirection: "column",
              padding: 15,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Poppins",
              }}
            >
              {/* name order  */}
              {item?.mealSessionDto2?.mealDto2?.name}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins",
              }}
            >
              Total: {item?.totalPrice} VND
            </Text>
            <Text
              style={{
                fontFamily: "Poppins",
              }}
            >
              Date: {item?.time}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins",
              }}
            >
              Booked Slot : {item?.quantity}
            </Text>
            {/* <View
              style={{
                borderRadius: 20,
                paddingVertical: 5,
                elevation: 5,
                backgroundColor: "white",
                borderWidth: 0.2,
                borderColor: "blue",
                width: "auto",
              }}
            > */}
            <Text
              style={{
                fontFamily: "Poppins",
              }}
            >
              {item?.status}
            </Text>
            {/* </View> */}
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          margin:20
        }}
      >
        {(item.status == 'COMPLETED') && (
          <TouchableOpacity
            style={{ paddingHorizontal: 10, 
          backgroundColor: "#FFAB01",
          padding: 10,
          borderRadius: 20,
        }}
            onPress={() => navigation.navigate("Feedback", { item })}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontSize: 18,
              }}
            >
              Review
            </Text>
          </TouchableOpacity>
        )}
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cartcard: {
    borderRadius: 20,
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  actionButton: {
    width: 80,
    height: 30,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
