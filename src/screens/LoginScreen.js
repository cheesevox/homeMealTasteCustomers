import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import ToastMessage from "../components/ToastMessage";
import { useRef } from "react";
import { login } from "../Api";
import { useDispatch } from "react-redux";
import { getUserInfor } from "../../slices/userSlice";
import { useRoute, useEffect } from "@react-navigation/native";
import Toast from "react-native-toast-message";
const LoginScreen = ({ navigation }) => {
  const route = useRoute();
  const user = route.params?.user || null;
  const dispatch = useDispatch();
  // collect data
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    phone: null,
    password: null,
  });
  const Login = () => {
    setLoading(true);
    login(values, navigation, Toast)
      .then((res) => {
        setLoading(false);
      })
      .catch((res) => console.log("that bai get api", res));
  };
  return (
    <View
      style={{
        backgroundColor: "#FFAB01",
        height: "100%",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image
          source={require("../../assets/images/loginimage.png")}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Text
          style={{
            marginTop: 20,
            fontSize: 30,
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
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
          }}
        >
          Welcome Back!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: "70%",
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          padding: 50,
          marginBottom: 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderRadius: 20,
            backgroundColor: "#F5F4F8",
            padding: 5,
            marginBottom: 20,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Ionicons name="call-outline" size={25}></Ionicons>
          </View>
          <TextInput
            style={{
              padding: 15,
              borderWidth: 0,
              borderColor: "white",
            }}
            placeholder="Your Phone Numbers"
            width={280}
            onChangeText={(text) =>
              setValues({
                ...values,
                phone: text,
              })
            }
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderRadius: 20,
            backgroundColor: "#F5F4F8",
            padding: 5,
            marginBottom: 20,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Ionicons name="lock-closed-outline" size={25}></Ionicons>
          </View>
          <TextInput
            style={{
              padding: 15,
              borderWidth: 0,
              borderColor: "white",
            }}
            placeholder="Your Password"
            secureTextEntry
            width={280}
            onChangeText={(text) =>
              setValues({
                ...values,
                password: text,
              })
            }
          ></TextInput>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            // onPress={() => navigation.navigate("FoodList")}
            onPress={Login}
            style={{
              backgroundColor: "#FFAB01",
              borderRadius: 18,
              opacity: loading ? 0.1 : 1,
              marginTop: 60,
              justifyContent: "center",
              paddingVertical: 18,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ marginTop: 50 }}>If You Don't Have An Account ?</Text>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Regiter")}
              style={{
                marginTop: 20,
                color: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black", fontWeight: "500" }}>
                Regiter Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;

{
  /* import { RouteName } from "../Constant";

const LoginScreen = ({ navigation }) => {
  // collect data
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  //create toast message ref
  const [toastType, setToastType] = useState("success");
  const toastRef = useRef(null);

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  // get set
  const onChagePhone = (value) => {
    setPhone(value);
  };
  const onChagePassword = (value) => {
    setPassword(value);
  };

  //button login
  const onClickLogin = () => {
	navigation.navigate(RouteName.CHEF_HOME);
    // if (phone.length == 0 || password.length == 0) {
    //   navigation.navigate("CustomerHome");
    //   return console.log("Please enter login infomation");
    // } else {
    //   setToastType("success");
    //   handleShowToast();
    //     navigation.navigate("CustomerHome");
    //   navigation.navigate("ChefHome");
    // }
    // console.log("Click login", {
    //   phone,
    //   password,
    // });
  };

  return (
    <View style={{}}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ToastMessage
          type={toastType}
          text="Login successfuly"
          description="Login succes"
          ref={toastRef}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/images/loginimage.png")}
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Text
          style={{
            marginTop: 20,
            fontSize: 30,
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
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
          }}
        >
          Welcome Back!
        </Text>
      </View>
      <View style={{ paddingTop: 30 }}>
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

          <View>
            <View style={{ padding: 20 }}>
              <TextInput
                placeholder="Your Phone Numbers"
                value={phone}
                width={280}
                onChangeText={onChagePhone}
              ></TextInput>
            </View>
          </View>
        </View>

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
              placeholder="Your Password"

              secureTextEntry={true}
              width={280}
              onChangeText={(text) =>
                setValues({
                  ...values,
                  password: text,
                })
              }
              value={password}
              secureTextEntry={true}
              width={280}
              onChangeText={onChagePassword}
            ></TextInput>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          // onPress={() => navigation.navigate("FoodList")}
          onPress={Login}

          onPress={onClickLogin}
          type=""
          style={{
            backgroundColor: "#f96163",
            borderRadius: 18,
            marginTop: 60,
            justifyContent: "center",
            paddingVertical: 18,
            width: "60%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginTop: 50 }}>If You Don't Have An Account ?</Text>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Regiter")}
            style={{
              marginTop: 20,
              color: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "black", fontWeight: "500" }}>
              Regiter Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </View>
  );
}; */
}
