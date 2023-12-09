import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { images, item } from "../Constant";
import * as Icon from "react-native-feather";
import UserCard from "../components/UserCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons/build/Icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserByID } from "../Api";
import TabViewSession from "../components/TabViewSession";
import Toast from "react-native-toast-message";
import HeaderComp from "./HeaderComp";
import { formatMoney } from "../../Money";

const UserProfileScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [profile, setProfile] = useState();

  const fectProfileByCustomerId = () => {
    getUserByID(user?.userId).then((res) => {
      setProfile(res);
    });
  };
  useEffect(() => {
    fectProfileByCustomerId();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fectProfileByCustomerId();
      console.log("Data refreshed!");
    });
    return unsubscribe;
  }, [navigation]);

  const handleLogout = () => {
    navigation.navigate("Login");
    Toast.show({
      type: "success",
      text1: "Logout",
      text2: "Logout Successfully.",
    });
    setTimeout(() => {
      Toast.hide();
    }, 5000);

    // Navigate back after hiding the toast
    setTimeout(() => {
      navigation.goBack();
    }, 5100);
  };

  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
        gap: 20,
        backgroundColor: "#FFF",
        height: "100%",
        flex: 1,
      }}
    >
      <HeaderComp label="Profile" isHasBackIcon={false} />
      <View
        style={{
          marginHorizontal: 20,
          borderRadius: 10,
          backgroundColor: "orange",
          marginVertical: 20,
          padding: 20,
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../../assets/images/avatar.jpg")}
          style={{
            borderRadius: 50,
            width: 50,
            height: 50,
            resizeMode: "cover",
          }}
        />
        <View style={{ paddingHorizontal: 25 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            {profile?.name} #{profile?.userId}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 12, color: "white" }}>
            Phone : {profile?.phone}
          </Text>
        </View>
      </View>
      {/* <TabViewSession/> */}
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View style={styles.cartcard}>
            <View
              style={{
                paddingVertical: 25,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("EditProfile", { profile })}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 20,
                  }}
                >
                  <Ionicons name="person-circle-outline" size={20}>
                    {" "}
                    My Account{" "}
                  </Ionicons>
                  <Ionicons name="chevron-forward-outline" size={20} />
                </View>
              </TouchableOpacity>
              <View>
                <Ionicons
                  name="location-outline"
                  size={20}
                  paddingVertical={20}
                >
                  {" "}
                  My Adress : {profile?.address}
                </Ionicons>
              </View>
              <Ionicons name="call-outline" size={20} paddingVertical={20}>
                {" "}
                Phone : {profile?.phone}{" "}
              </Ionicons>
              <Ionicons name="mail-outline" size={20} paddingVertical={20}>
                {" "}
                Email : {profile?.email}
              </Ionicons>
              <TouchableOpacity
                onPress={() => navigation.navigate("Wallet", { item: profile })}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                      name="wallet-outline"
                      size={20}
                      paddingVertical={20}
                    >
                      {" "}
                      Wallet :
                    </Ionicons>
                    <Text style={{ fontSize: 20 }}>
                      {" "}
                      {formatMoney(profile?.walletDto?.balance)} VND
                    </Text>
                  </View>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={20}
                    paddingVertical={20}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                      name="newspaper-outline"
                      size={20}
                      paddingVertical={20}
                    >
                      {" "}
                      Transaction
                    </Ionicons>
                  </View>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={20}
                    paddingVertical={20}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Privacy")}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                      name="shield-outline"
                      size={20}
                      paddingVertical={20}
                    >
                      {" "}
                      Privacy
                    </Ionicons>
                  </View>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={20}
                    paddingVertical={20}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLogout()}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Ionicons
                    name="log-out-outline"
                    size={20}
                    paddingVertical={20}
                  >
                    {" "}
                    Logout
                  </Ionicons>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={20}
                    paddingVertical={20}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <FlatList
        data={profile}
        renderItem={({ item }) =>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginHorizontal: 30 }}>
            <Image
              source={item.image}
              style={{ borderRadius: 50, width: 200, height: 200, resizeMode: "cover" }}
            />
            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 26, color: 'orange' }}>{item.name}</Text>
            <View style={styles.cartcard}>
              <View style={{
                height: 250,
                marginLeft: 10,
                paddingVertical: 20,
                marginHorizontal: 50,
                justifyContent: 'space-between',
                fontWeight: "",
                flex: 1
              }}>
                <TouchableOpacity>
                  <Ionicons name='wallet-outline' size={25} paddingHorizontal={5}> Name {item.name} </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name='wallet-outline' size={25} paddingHorizontal={5}> Help {item.email} </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name='wallet-outline' size={25} paddingHorizontal={5}> Term & Policy {item.phone}</Ionicons>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Wallet")}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Ionicons
                      name='wallet-outline' size={25} paddingHorizontal={5}> Wallet
                    </Ionicons>
                    <Text style={{ fontSize: 20 }}>{item.walletDto}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
      >
      </FlatList> */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            backgroundColor: "#f96163",
            borderRadius: 29,
            paddingVertical: 18,
            width: "60%",
            marginBottom: 20
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 18, color: "#fff", fontWeight: "700", }}>
            Logout
          </Text>
        </TouchableOpacity> */}
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
  cartcard: {
    height: "99%",
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    width: "90%",
  },
});
export default UserProfileScreen;
