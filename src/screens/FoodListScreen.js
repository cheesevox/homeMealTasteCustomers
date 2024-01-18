import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import React, { useState, useEffect } from "react";
// import CategoriesFilter from "../components/CategoriesFilter";
import {
  getAllAreaByDistrictId,
  getAllDishType,
  getAllDistrict,
  getAllMealInSessionID,
  getAllSession,
  getAllSessionByAreaId,
  getAllSessionWithStatusAndBookingSlotTrue,
} from "../Api";
import { getAllArea } from "../Api";
import MealSessionCard from "../components/MealSessionCard";
import { Dropdown } from "react-native-element-dropdown";
import { useSelector } from "react-redux";
import { TabView, SceneMap } from "react-native-tab-view";
import TabViewSession from "../components/TabViewSession";
import { Card } from "react-native-paper";
import { Bold } from "react-native-feather";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import AreaCard from "../components/AreaCard";
import SessionCard from "../components/SessionCard";
const FoodListScreen = ({ navigation, route }) => {
  const user = useSelector((state) => state.user.user);
  const { name } = user || {};
  const [touch, setTouch] = useState(0);
  const [area, setArea] = useState([]);
  const [areaId, setAreaId] = useState();
  const [mealInSession, setMealInSession] = useState([]);
  const [mealInSessionId, setMealInSessionId] = useState([]);
  const districtDefault = useSelector((state) => state.user.user?.districtId);
  const [dishType, setDishType] = useState([]);
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState(1);
  const [isFocus, setIsFocus] = useState(false);
  const [sessions, setSessions] = useState([]);

  // const loadFontsAsync = async () => {
  //   await
  // };
  // loadFontsAsync();
  // const fetchAllSessionByAreaId = (id) => {
  //   getAllSessionByAreaId(areaId ? areaId : area[0])
  //     .then((res) => {
  //       setSessin(res);
  //     })
  //     .catch((error) => console.log(error));
  // };
  const fetchAllSession = () => {
    getAllSessionWithStatusAndBookingSlotTrue().then((res) => {
      setSessions(res);
    });
  };
  const DishTypeComponent = ({ item }) => (
    <TouchableOpacity
      style={{
        padding: 20,
        paddingHorizontal: 30,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#FFDA6E",
        elevation: 5,
      }}
      onPress={() => {
        navigation.navigate("DishTypeDetailScreen", {
          dishTypeId: item?.dishTypeId,
        });
      }}
    >
      <Ionicons name="bonfire" size={20} color="red" />
      <Text
        style={{
          fontFamily: "Poppins",
          fontSize: 15,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  const fectchAllAreaByDistrictId = () => {
    getAllAreaByDistrictId(districtId ? districtId : districtDefault)
      .then((res) => {
        setArea(res);
        setAreaId(res[0].areaId);
        // const districtName = session[0]?.districtDtoResponse?.districtName;
      })
      .catch((error) => console.log(error));
  };
  const fetchAllDishType = () => {
    getAllDishType().then((res) => {
      // console.log("newwwwwwwwwwwwwwwwww", res);
      setDishType(res);
    });
  };
  useEffect(() => {
    fectchAllAreaByDistrictId();
  }, [districtId]);

  useEffect(() => {
    getAllDistrict().then((ref) => {
      console.log(ref);
      setDistrict(ref);
    });
    fetchAllDishType();
    fetchAllSession();
  }, []);
  useEffect(() => {
    const fetchData = () => {
      fetchAllSession()
    }
    fetchData()
    const intervalId = setInterval(fetchData, 5000)
    return () => clearInterval(intervalId)
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          backgroundColor: "#FFA500",
          height: "25%",
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            marginTop: 0,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <Ionicons size={35} name="notifications-outline" color={"orange"} />
          </View> */}
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: 700,
                fontFamily: "Poppins",
              }}
            >
              Hi! {name}
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
            >
              Welcome Back ! Are you hungry ?
            </Text>
            {/* <View>{session[0].districtDtoResponse.districtName}</View> */}
          </View>
        </View>
        {/* Search Filter */}
        {/* <View
          style={{
            flexDirection: "row",
            width: "100%",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}
        {/* <View
            style={{
              display: "flex",
              backgroundColor: "white",
              borderRadius: 20,
              width: "100%",
              height: 70,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              // bottom: -40,
            }}
          > */}
        {/* <View 
              // style={{
                // width: "100%",
                // borderRadius: 20,
                // position: "absolute",
              // }}
          // >*/}
        {/* <Dropdown
          style={{
            position: "absolute",
            backgroundColor: "white",
            width: "90%",
            padding: 10,
            borderRadius: 20,
            bottom: -20,
            left: "5%",
            right: "5%",
            borderColor: "gray",
          }}
          fontFamily="Poppins"
          containerStyle={{
            borderRadius: 20,
            overflow: "hidden",
            top: 5,
          }}
          data={district}
          labelField="districtName"
          valueField="districtId"
          searchPlaceholder="Search..."
          value={districtId}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(value) => {
            setDistrictId(value.districtId);
            // router.refesh
          }}
        /> */}
        {/* </View> */}
        {/* </View> */}
        {/* </View> */}
        {/* sessiion filter */}
      </View>
      {/* dish types */}
      <View
        style={{
          height: "75%",
        }}
      >
        <View
          style={{
            marginTop: 20,
            padding: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Category
          </Text>
          <View
          // style={{
          //   flex: 1,
          // }}
          >
            {/* <FlatList data={dishType} renderItem={(item)=>(
            <Text>{item?.name}<Text>
          )}/> */}
            <FlatList
              horizontal
              style={{
                padding: 10,
              }}
              data={dishType}
              renderItem={({ item }) => <DishTypeComponent item={item} />}
            />
          </View>
        </View>
        <View style={{ marginBottom: 50, padding: 10, height: "100%" }}>
          <Text
            style={{ fontSize: 30, fontWeight: "bold", fontFamily: "Poppins" }}
          >
            Session
          </Text>
          {/* district list */}
          <View
            style={{
              borderRadius: 20,
              padding: 10,
            }}
          >
            <FlatList
              style={{ gap: 5, height: '62%' }}
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={sessions}
              keyExtractor={(item) => item.sessionId}
              renderItem={(item) => (
                <View style={{ marginBottom: 5 }}>
                  <SessionCard session={item} navigation={navigation} />
                </View>
              )}
            ></FlatList>
          </View>
        </View>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default FoodListScreen;

const styles = StyleSheet.create({
  touchactive: { backgroundColor: "#f96163" },
  textAreaActive: {
    backgroundColor: "#f96163",
    container: {
      backgroundColor: "white",
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: "gray",
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      backgroundColor: "white",
      paddingHorizontal: 8,
      justifyContent: "center",
    },
    placeholderStyle: {
      fontSize: 12,
    },
    selectedTextStyle: {
      fontSize: 10,
      AlignItem: "center",
    },
    inputSearchStyle: {
      fontSize: 12,
    },
  },
});
