import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const onChagePhone = (value) => {
    setPhone(value);
  };
  const onChagePassword = (value) => {
    setPassword(value);
  };
  const onChageUserName = (value) => {
    setUserName(value);
  };
  const onChageEmail = (value) => {
    setEmail(value);
  };

  const onClickRegister = () => {
    if (phone.length == 0 || password.length == 0) {
      return console.log("Please enter Regiter infomation");
    } else {
      navigation.navigate("Login");
    }
    console.log("Click regiter", {
      phone,
      password,
      username,
      email,
    });
  };
  return (
    <View style={{ marginTop: 30 }}>
      <View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 30,
              fontWeight: "bold",

              color: "#3c444c",
            }}
          >
            Home Meal Taste
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "red",

              marginBottom: 40,
            }}
          >
            Welcome To Mommy Kitchen!
          </Text>
        </View>
      </View>
      <View>
        {/*phone for register */}
        <View
          style={{
            paddingLeft: 10,
            marginHorizontal: 40,
            flexDirection: "row",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Ionicons name="call-outline" size={20}></Ionicons>
          </View>
          <View style={{ padding: 20 }}>
            <TextInput
              width={280}
              placeholder="Your Phone Numbers"
              value={phone}
              onChangeText={onChagePhone}
            ></TextInput>
          </View>
        </View>
        {/* password for register */}
        <View
          style={{
            paddingLeft: 10,
            marginHorizontal: 40,
            flexDirection: "row",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Ionicons name="lock-closed-outline" size={20}></Ionicons>
          </View>
          <View style={{ padding: 20 }}>
            <TextInput
              width={280}
              placeholder="Your Password"
              value={password}
              secureTextEntry={true}
              onChangeText={onChagePassword}
            ></TextInput>
          </View>
        </View>
        {/* user name */}
        <View
          style={{
            marginTop: 10,
            paddingLeft: 10,
            marginHorizontal: 40,
            flexDirection: "row",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Ionicons name="card-outline" size={20}></Ionicons>
          </View>
          <View style={{ padding: 20 }}>
            <TextInput
              width={280}
              placeholder="Your Name"
              value={username}
              onChangeText={onChageUserName}
            ></TextInput>
          </View>
        </View>
        {/* user     */}
        <View
          style={{
            paddingLeft: 10,
            marginHorizontal: 40,
            flexDirection: "row",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Ionicons name="mail-outline" size={20}></Ionicons>
          </View>
          <View style={{ padding: 20 }}>
            <TextInput
              width={280}
              placeholder="Your Email"
              value={email}
              onChangeText={onChageEmail}
            ></TextInput>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 50,
            paddingRight: 50,
          }}
        >
          By signing up you agree to our Terms &
        </Text>
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 50,
            paddingRight: 50,
          }}
        >
          Condition and Privacy Policy
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          // onPress={() => navigation.navigate("FoodList")}
          onPress={onClickRegister}
          type=""
          style={{
            backgroundColor: "#f96163",
            borderRadius: 18,
            marginTop: 30,
            justifyContent: "center",
            paddingVertical: 18,
            width: "60%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
            Regiter
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginTop: 50 }}>Already Have Account ?</Text>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              marginTop: 20,
              color: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "black", fontWeight: "500" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default RegisterScreen;
