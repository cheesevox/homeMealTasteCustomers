import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Icon from "react-native-feather";
import {
  getAllApprovedMealSessionBySessionId,
  getAllAreaBySessionId,
  getAllMealSessionInDayApprove,
  getAllMealSessionWithStatus,
  getAllSessionByAreaId,
  getMealInSessionBySessionId,
} from "../Api";
import MealSessionCard from "../components/MealSessionCard";
// import { err } from 'react-native-svg/lib/typescript/xml';
import FoodCard from "../components/FoodCard";
import HeaderComp from "./HeaderComp";
import { Dropdown } from "react-native-element-dropdown";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native";
const MealSession = ({ navigation, route }) => {
  const { sessionId } = route.params;

  const [session, setSession] = useState([]);
  const [value, setValue] = useState();
  const [area, setArea] = useState([]);
  const [newData, setNewData] = useState([]);
  const [mealSession, setMealSession] = useState([]);
  // const fetchAllSessionByAreaId = () => {
  //   getAllMealSessionInDayApprove(areaId).then((res) => {
  // setMealSession(res);
  //   });
  // };
  // const fetchAllSessionTrueByAreaId = () => {
  //   getAllSessionByAreaId(areaId).then((res) => {
  //     console.log("session res la", res[0]?.sessionId);
  //     setSession(res);
  //     setValue(res[0]?.sessionId);
  //   });
  // };
  
  const fetchAllMealSessionBySessionId = () => {
    getAllApprovedMealSessionBySessionId(sessionId).then((res) => {
      // console.log("RESSSSSSSSSSSSSSSS",res)
      setMealSession(res);
    });
  };
  const fetchAllAreaInSession = () => {
    getAllAreaBySessionId(sessionId).then((res) => {
      const defaultArea = { areaId: 'defaultAreaId', areaName: 'Default Area' };
      const areasWithDefault = [defaultArea, ...res];
  
      // Set the modified array using setArea
      setArea(areasWithDefault);
    })
    // getAllAreaBySessionId(sessionId).then((res) => {
    //   setArea(res);
    // });
  };
  // const filteredMealSession = mealSession.filter(
  //   (item) =>
  //     item?.sessionDtoForMealSession?.areaDtoForMealSession?.areaId === areaId
  // );
  useEffect(() => {
    fetchAllMealSessionBySessionId();
    fetchAllAreaInSession();
  }, [sessionId]);

  // useEffect(() => {
  //   // fetchAllSessionByAreaId();
  //   // fetchAllSessionTrueByAreaId();
  //   let filteredData = [...mealSession];
  //   if (value) {
  //     filteredData = mealSession.filter((item) => {
  //       return (
  //         item.kitchenDtoForMealSession?.areaDtoForMealSession?.areaId == value
  //       );
  //     });
  //   } else  { // Adjust this condition based on your default areaId
  //     setNewData(mealSession);
  //     return; // Exit the useEffect early
  //   }
  //   setNewData(filteredData);
  // }, [value]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // fetchAllSessionByAreaId();
      console.log("Data refreshed!");
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const fetchData = ()=>{
      // fetchAllSessionByAreaId(area);
      fetchAllMealSessionBySessionId();
      fetchAllAreaInSession();
    }
    fetchData()
    const intervalId = setInterval(fetchData, 5000)
    return()=> clearInterval(intervalId)
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp label="Meal's Market" onBack={() => navigation.goBack()} />
      <View style={styles.body}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          containerStyle={styles.containerStyle}
          fontFamily="Poppins"
          data={area}
          maxHeight={300}
          labelField="areaName"
          valueField="areaId"
          placeholder="Select Area"
          value={value}
          onChange={(item) => {
            console.log(item);
            setValue(item.areaId);
            if (item.areaId === 'defaultAreaId') {
            } else {
              const filteredData = mealSession.filter((meal) => (
                meal.kitchenDtoForMealSession?.areaDtoForMealSession?.areaId === item.areaId
              ));
              setNewData(filteredData);
            }
          }}
        />
        <FlatList
          numColumns={2}
          data={value ? newData : mealSession}
          renderItem={(item, index) => <FoodCard item={item} key={index} />}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default MealSession;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  body: {
    height: "90%",
  },
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
    width: "50%",
    borderRadius: 20,
    borderWidth: 2,
    paddingVertical: 5,
  },
  // footer: {
  //     flex: 1,
  //     // backgroundColor: 'blue'
  // }
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: "Poppins",
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  containerStyle: {
    borderRadius: 10,
  },
});
