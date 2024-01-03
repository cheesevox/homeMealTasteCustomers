import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
export default function SessionCard({ session, navigation }) {
  console.log("session lay61 d9c la", session);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("MealSession", {
          session: session?.item?.sessionId,
        });
      }}
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        width: "100%",
        marginVertical: 5,
      }}
    >
      {session?.item.sessionType == "Lunch" ? (
        <Ionicons name="sunny-outline" size={30} color="orange" />
      ) : session?.item.sessionType == "Evening" ? (
        <Ionicons name="moon-outline" size={30} color="purple" />
      ) : (
        <Ionicons name="star-outline" size={25} />
      )}
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
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins",
            }}
          >
            Start Time : {session.item?.startTime}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins",
            }}
          >
            End Time : {session.item?.endTime}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "Poppins",
          }}
        >
          {session?.item?.endDate}
        </Text>
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
