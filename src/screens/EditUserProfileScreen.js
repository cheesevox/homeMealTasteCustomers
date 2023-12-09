import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { TextInput } from "react-native-paper";

const EditUserProfileScreen = ({ navigation, route }) => {
  const profile = route.params;
  console.log("EDITTTTTTTTTTTTTTTTT PROOOOOOOO", profile);
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 40,
            height: 40,
            backgroundColor: "orange",
            borderRadius: 28,
            marginTop: 42,
          }}
        >
          <Icon.ArrowLeft style={{ color: "white" }} strokeWidth={3} />
        </TouchableOpacity>
        <Text style={styles.Text}>Bio Profile</Text>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 40,
            height: 40,
            borderRadius: 28,
            marginTop: 42,
          }}
        >
          <Icon.CreditCard style={{}} strokeWidth={3} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", margin: 20 }}>
        <Image
          source={require("../../assets/images/avatar.jpg")}
          style={{
            borderRadius: 60,
            width: 100,
            height: 100,
            resizeMode: "cover",
            alignItems: "center",
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {profile?.profile?.name} # {profile?.profile?.userId}
        </Text>
      </View>

      <View>
        <TextInput
          placeholder="Your Name"
          style={{ marginVertical: 20, marginHorizontal: 40 }}
        ></TextInput>
        <TextInput
          placeholder="Your Address"
          style={{ marginVertical: 20, marginHorizontal: 40 }}
        ></TextInput>
        <TextInput
          placeholder="Your Email"
          style={{ marginVertical: 20, marginHorizontal: 40 }}
        ></TextInput>
        <TextInput
          placeholder="Your Location"
          style={{ marginVertical: 20, marginHorizontal: 40 }}
        ></TextInput>
        <TextInput
          placeholder="Your Area"
          style={{ marginVertical: 20, marginHorizontal: 40 }}
        ></TextInput>
      </View>

      <View
        style={{ justifyContent: "center", alignItems: "center", margin: 20 }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#f96163",
            borderRadius: 18,
            justifyContent: "center",
            paddingVertical: 18,
            width: "60%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
            Update Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontWeight: "600",
    fontSize: 24,
    textAlign: "center",
    color: "#e65332",
    borderColor: "white",
    backgroundColor: "#fab3a2",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginTop: 40,
    width: "40%",
    borderRadius: 20,
    borderWidth: 2,
  },
});
export default EditUserProfileScreen;
