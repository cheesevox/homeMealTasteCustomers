import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Linking,
} from "react-native";
import * as Icon from "react-native-feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { createPayment, getAllTransactionByUserId, getUserByID } from "../Api";
import { userimage } from "../Constant";
import { CheckBox } from "react-native-elements";
import { rows } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import { WebView } from "react-native-webview";
import HeaderComp from "./HeaderComp";
import { useSelector } from "react-redux";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useFocusEffect } from "@react-navigation/native";

const WalletScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [profile, setProfile] = useState();
  const [showWebView, setShowWebView] = useState(false);
  const yourLink =
    "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=678900&vnp_Command=pay&vnp_CreateDate=20231128172549&vnp_CurrCode=VND&vnp_IpAddr=127.0.0.1&vnp_Locale=vn&vnp_OrderInfo=5&vnp_OrderType=Recharge&vnp_ReturnUrl=https%3A%2F%2Fhomemealtaste.azurewebsites.net%2Fapi%2FPayment%2Fget-payment-return&vnp_TmnCode=V25Y8STO&vnp_TxnRef=638367639499956841&vnp_Version=2.1.0&vnp_SecureHash=e46f8343b778224b1075f674aac39cf12ed3b276b7a8832eccc27435cfadbfb1e2261e6b2318b7658daf42dc225a7dc482e9345fb6916296cff4207a28a70ce1";
  const user = useSelector((state) => state.user.user);
  const fectProfileByCustomerId = () => {
    getUserByID(user?.userId).then((res) => {
      console.log("ptroooooooofileeeeeeeee", res)
      setProfile(res);
    });
  };

  useEffect(() => {
    fectProfileByCustomerId();
  }, []);
  const handlePressWeb = () => {
    // MyWebComponent(link);
    setShowWebView(true);
    navigation.navigate("WebScreen", { link });
  };

  const [link, setLink] = useState("");
  const id = user?.userId
  const [balance, setBalance] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [values, setValues] = useState({
    userId: user?.userId,
    balance: null,
  });
  const createPaymentCustomer = () => {
    createPayment(values).then((res) => {
      setLink(res);
    });
  };
  const openLink = async () => {
    const url = link;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
      console.log(" open succes : ", url);
    } else {
      console.error(`Cannot open URL: ${url}`);
    }
  };
  const [transaction, setTransaction] = useState([]);
  const fetchAllTransactionByUserId = (id) => {
    getAllTransactionByUserId(id)
      .then((res) => {
        setTransaction(res);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  };
  useEffect(() => {
    const fetchData = () => {
      fetchAllTransactionByUserId(id)
    }
    fetchData()
    const intervalId = setInterval(fetchData, 5000)
    return () => clearInterval(intervalId)
  }, [id]);
  useEffect(() => {
    fetchAllTransactionByUserId(id)
  }, [id])
  const handlePress = async () => {
    // Call createPaymentCustomer first
    createPaymentCustomer();
    setSelection(!isSelected);
  };
  const filteredTransactionsOrder = transaction.filter((item) => item.transactionType === 'ORDERED');
  const filteredTransactionsRedfund = transaction.filter((item) => item.transactionType === 'REFUND');
  const filteredTransactionsOrderRecharge = transaction.filter((item) => item.transactionType === 'RECHARGED');

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Recharge" },
    { key: "second", title: "Order" },
    { key: "three", title: "Refund" },
  ]);
  const FirstRoute = () => (
    <View
      style={{
        backgroundColor: "orange",
        height: "100%",
        padding: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
        }}
      >
        {/* <Text
          style={{
            fontWeight: "bold",
            fontSize: 26,
          }}
        >
          Tranfer Transaction
        </Text> */}
        {/* <FlatList
        data={order}
        keyExtractor={(item) => item.orderId.toString()}
        renderItem={renderItem}
      /> */}
        <FlatList
          data={filteredTransactionsOrderRecharge?.slice()?.reverse()}
          keyExtractor={(item) => item.transactionId.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
  const SecondRoute = () => (
    <View
      style={{
        backgroundColor: "orange",
        height: "100%",
        padding: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <FlatList
          data={filteredTransactionsOrder?.slice()?.reverse()}
          keyExtractor={(item) => item.transactionId.toString()}
          renderItem={renderItemORDERED}
        />
      </View>
    </View>
  );
  const ThreeRoute = () => (
    <View
      style={{
        backgroundColor: "orange",
        height: "100%",
        padding: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <FlatList
          data={filteredTransactionsRedfund?.slice()?.reverse()}
          keyExtractor={(item) => item.transactionId.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    three: ThreeRoute,
  });

  const renderItem = ({ item }) => (
    <View style={{ margin: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 20, elevation: 5 }}>
      <Text>Transaction ID: {item.transactionId}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Amount: +{item.amount}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );
  const renderItemORDERED = ({ item }) => (
    <View style={{ margin: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 20, elevation: 5 }}>
      <Text>Transaction ID: {item.transactionId}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Amount: -{item.amount}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      console.log('About to blur, resetting state...');
      setValues((prevValues) => ({ ...prevValues, balance: '' }));
      setSelection(false);
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderComp label="Wallet" onBack={() => navigation.goBack()} />
      <View style={{ flex: 4, marginHorizontal: 30 }}>
        {/* <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Balance :</Text> */}
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: "100%" }}
          tabBarOptions={{
            activeTintColor: "white", // Change this to your desired color
            tabBarStyle: { backgroundColor: "black" }, // Change this to your desired background color
          }}
          sceneContainerStyle={{ backgroundColor: "white" }} // Change this to your desired color
          style={{
            flex: 3,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            marginHorizontal: 10,
            margin: 10
          }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{ backgroundColor: "white" }}
              labelStyle={{ color: "black" }}
            />
          )}
        />
        <Text
          style={{
            fontSize: 21,
            fontWeight: "bold",
            color: "orange",
            fontFamily: "Poppins",
          }}
        >
          Balance : {profile?.walletDto?.balance} VND
        </Text>
        <Text
          style={{ fontWeight: "bold", fontSize: 18, fontFamily: "Poppins" }}
        >
          Input For Reacharge
        </Text>
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 30,
            width: "100%",
            marginVertical: 20,
            elevation: 5,
          }}
        >
          <TextInput
            placeholder="Input monney incomming"
            onChangeText={(text) => {
              setValues({ ...values, balance: text === '' ? '' : text });
            }}
            value={values.balance}
          ></TextInput>
        </View>
        <View style={{ justifyContent: "center", marginTop: 10 }}>
          <View
            style={{
              width: "100%",
              borderWidth: 2,
              borderRadius: 30,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../assets/images/Icon.png")}
              ></Image>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}> VN Pay</Text>
            </View>
            {/* <Ionicons style={{ fontSize: 30 }} name='checkmark-circle-outline'></Ionicons> */}
            <CheckBox
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              // checked={this.st.ate.checked}
              checked={isSelected}
              onPress={handlePress}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={handlePressWeb}
          style={{
            backgroundColor: "#FFAB01",
            borderRadius: 29,
            paddingVertical: 18,
            width: "60%",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              color: "#fff",
              fontWeight: "700",
            }}
          >
            Re-Charge Wallet
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wallet: {
    backgroundColor: "rgba(98, 83, 196, 0.8)",
    borderRadius: 29,
    paddingVertical: 18,
    width: "80%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 30,
    marginHorizontal: 50,
    marginTop: 20,
  },
  walletText: {
    fontWeight: "600",
    justifyContent: "center",
    fontSize: 26,
    alignContent: "center",
    textAlign: "center",
    color: "#e65332",
    borderColor: "white",
    backgroundColor: "#fab3a2",
    fontWeight: "bold",
    marginTop: 40,
    width: "40%",
    borderRadius: 20,
    borderWidth: 2,
  },
});

export default WalletScreen;
