import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Icon from "react-native-feather";
import { TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import { getAllDistrict, updateProfile } from "../Api";
import Toast from "react-native-toast-message";
import HeaderComp from "./HeaderComp";

const EditUserProfileScreen = ({ navigation, route }) => {
  const [isFocus, setIsFocus] = useState(false);
  const profile = route.params;
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrcitId] = useState();
  const [value, setValue] = useState(null);

  const fetchAllDistrict = () => {
    getAllDistrict().then((res) => {
      setDistrict(res);
    });
  };
  useEffect(() => {
    fetchAllDistrict();
  }, []);

  const [values, setValues] = useState({
    userId: profile?.profile?.userId,
    name: profile?.profile?.name || "",
    username: profile?.profile?.username || "",
    phone: profile?.profile.phone || "",
    email: profile?.profile?.email || "",
    address: profile?.profile?.address || "",
    districtId: profile?.profile?.districtId || null,
  });

  const onHandleUpdateProfile = () => {
    updateProfile(values);
    Toast.show({
      type: "success",
      text1: "Update",
      text2: "Update Successfully.",
    });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      {/* <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
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
      </View> */}
      <HeaderComp label="Edit Profile" onBack={() => navigation.goBack()} />
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
          {profile?.profile?.name}
        </Text>
      </View>
      <View>
        <TextInput
          label="Name"
          placeholder={profile?.profile?.name}
          style={{ marginVertical: 20, marginHorizontal: 40 }}
          value={values.name}
          onChangeText={(text) =>
            setValues({
              ...values,
              name: text,
            })
          }
        ></TextInput>
        <TextInput
          label="Phone"
          placeholder={profile?.profile?.username}
          style={{ marginVertical: 20, marginHorizontal: 40 }}
          value={values.phone}
          onChangeText={(text) => {
            // Remove non-numeric characters
            const numericValue = text.replace(/[^0-9]/g, '');
            // Check if the numeric value has 10 digits
            if (numericValue.length = 10) {
              setValues({
                ...values,
                phone: numericValue,
              });
            }
          }}
        />
        <TextInput
          label="Email"
          placeholder={profile?.profile?.email}
          style={{ marginVertical: 20, marginHorizontal: 40 }}
          value={values.email}
          onChangeText={(text) =>
            setValues({
              ...values,
              email: text,
            })
          }
        ></TextInput>
        <Dropdown
          style={{
            backgroundColor: "white",
            border: "none",
            borderRadius: 10,
            marginHorizontal: 40,
            padding: 10,
            elevation: 5,
          }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={district}
          maxHeight={300}
          labelField="districtName"
          valueField="districtId"
          value={values.districtId}
          placeholder={profile?.profile?.districtDto?.districtName}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            console.log("Selected district in dropdown:", item);
            setValues({
              ...values,
              districtId: item.districtId,
            });
            setIsFocus(false);
          }}
        ></Dropdown>

      </View>

      <View
        style={{ justifyContent: "center", alignItems: "center", margin: 20 }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FFAB01",
            borderRadius: 18,
            justifyContent: "center",
            paddingVertical: 18,
            width: "60%",
            alignItems: "center",
          }}
          onPress={() => onHandleUpdateProfile()}
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
