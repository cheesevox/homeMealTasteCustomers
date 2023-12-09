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
  getAllDistrict,
  getAllMealInSessionID,
  getAllSessionByAreaId,
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
const FoodListScreen = ({ navigation, route }) => {
  const user = useSelector((state) => state.user.user);
  const { name } = user || {};
  const [touch, setTouch] = useState(0);
  const [area, setArea] = useState([]);
  const [areaId, setAreaId] = useState();
  const [mealInSession, setMealInSession] = useState([]);
  const [mealInSessionId, setMealInSessionId] = useState([]);
  const districtDefault = useSelector((state) => state.user.user?.districtId);
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState(1);
  const [isFocus, setIsFocus] = useState(false);
  // const loadFontsAsync = async () => {
  //   await
  // };
  // loadFontsAsync();
  const fetchAllSessionByAreaId = (id) => {
    getAllSessionByAreaId(areaId ? areaId : area[0])
      .then((res) => {
        setSessin(res);
      })
      .catch((error) => console.log(error));
  };

  const fectchAllAreaByDistrictId = () => {
    getAllAreaByDistrictId(districtId ? districtId : districtDefault)
      .then((res) => {
        setArea(res);
        setAreaId(res[0].areaId);
        const districtName = session[0]?.districtDtoResponse?.districtName;
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fectchAllAreaByDistrictId();
  }, [districtId]);

  useEffect(() => {
    getAllDistrict().then((ref) => {
      console.log(ref);
      setDistrict(ref);
    });
  }, []);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     fectchAllAreaByDistrictId(districtId);
  //     fetchAllSessionByAreaId(districtId);
  //     fectchAllAreaByDistrictId(districtId);
  //     setDistrictId(districtId);
  //   });
  //   return unsubscribe; // Cleanup
  // }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ECECEC" }}>
      <View
        style={{
          backgroundColor: "#FFA500",
          height: "25%",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            marginTop: 0,
            justifyContent: "space-between",
            paddingHorizontal: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <Ionicons size={35} name="notifications-outline" color={"white"} />
          </View>
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
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              backgroundColor: "white",
              borderRadius: 20,
              width: "100%",
              height: 70,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              bottom: -40,
            }}
          >
            <View
              style={{
                width: "100%",
                borderRadius: 20,
              }}
            >
              <Dropdown
                fontFamily="Poppins"
                containerStyle={{
                  borderRadius: 20,
                  width: "100%",
                  overflow: "hidden",
                  top: 15,
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
              />
            </View>
          </View>
        </View>

        {/* sessiion filter */}
      </View>
      <View style={{ marginVertical: 50, padding: 10, height: "60%" }}>
        <Text
          style={{ fontSize: 30, fontWeight: "bold", fontFamily: "Poppins" }}
        >
          Area
        </Text>
        {/* district list */}
        <View
          style={{
            height: "100%",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <FlatList
            style={{ gap: 20 }}
            numColumns={2}
            data={area}
            keyExtractor={(item) => item.areaId}
            renderItem={(area) => (
              <AreaCard area={area} navigation={navigation} />
            )}
          ></FlatList>
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
