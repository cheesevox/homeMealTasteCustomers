import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
export default function SessionCard({ session, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("MealSession", {
          sessionId: session?.item?.sessionId,
        });
      }}
      style={{
        backgroundColor:
          session?.item.sessionType == "Lunch"
            ? "#FDDB99"
            : session?.item.sessionType == "Dinner"
            ? "#F1EAFF"
            : "",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        padding: 10,
        width: "95%",
        marginVertical: 30,
        marginHorizontal: 10,
        height: 150,
        position: "relative",
        elevation: 5,
      }}
    >
      <View
        style={{
          position: "absolute",
          top: -30,
          left: 20,
          padding: 15,
          borderRadius: 100,
          backgroundColor: "white",
          elevation: 5,
        }}
      >
        {session?.item.sessionType == "Lunch" ? (
          <Ionicons name="sunny-outline" size={40} color="orange" />
        ) : session?.item.sessionType == "Evening" ? (
          <Ionicons name="moon-outline" size={25} color="purple" />
        ) : (
          <Ionicons name="moon-sharp" size={25} />
        )}
      </View>
      <View
        style={{
          marginTop: 10,
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>{session.item?.sessionName}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              padding: 8,
              backgroundColor: "white",
              borderRadius: 100,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "black",
                fontFamily: "Poppins",
              }}
            >
              Start Time : {session.item?.startTime}
            </Text>
          </View>
          <View
            style={{
              padding: 8,
              backgroundColor: "white",
              borderRadius: 100,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View>
            </View>
            <Text
              style={{
                color: "black",
                fontFamily: "Poppins",
              }}
            >
              End Time : {session.item?.endTime}
            </Text>
          </View>
        </View>
        {/* <Text
          style={{
            fontFamily: "Poppins",
          }}
        >
          {session?.item?.endDate}
        </Text> */}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins",
  },
});
