import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getOrderByID, postStatusOrderFromCustomer } from './Api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ArrowDownLeft } from "react-native-feather";
import { faArrowLeft, faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import HeaderComp from './screens/HeaderComp';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
const OrderCancelScreen = (props) => {
    const navigation = useNavigation();
    const { route } = props;
    const orderId = route.params;
    const [order, setOrder] = useState([])
    console.log("ORDER", order)
    const fetchOrderbyOrderId = () => {
        getOrderByID(orderId).then((res) => {
            console.log("ORDER", res)
            setOrder(res)
        })
    }
    useEffect(() => {
        fetchOrderbyOrderId(orderId)
    }, [orderId])

    const onHandleCompletedOrder = (id) => {
        postStatusOrderFromCustomer(id)
          .then(() => {
            console.log("Order cancel success");
            Toast.show({
              type: 'error',
              text1: 'Cancel Order Completed',
              
              visibilityTime: 3000, // 3 seconds
              autoHide: true,
            });
            navigation.goBack();
          })
          .catch((error) => {
            console.error("Error completing order:", error);
          });
      };

    return (
        <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
            <View>
                <HeaderComp label="Order History" isHasBackIcon={false} />
            </View>
            <View
                style={{
                    margin: 10,
                    borderRadius: 20,
                    padding: 10,
                    backgroundColor: "#FFD580",
                    elevation: 5,
                    flexDirection: "column",
                }}
            >
                <View style={{ alignItems: "center" }}>
                    {order?.mealSessionDto2?.mealDto2?.image ? (
                        <Image
                            source={{ uri: order.mealSessionDto2.mealDto2.image }}
                            style={{ width: 200, height: 200, resizeMode: "cover", borderRadius: 20 }}
                        />
                    ) : (
                        <Text>No Image Available</Text>
                    )}
                </View>
                <View style={{}}>
                    <View style={styles.card}>
                        <Text>Order ID : {order?.orderId}</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Customer' Name : {order?.customer?.name}</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Customer' Phone : {order?.customer?.phone}</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Meal : {order?.mealSession?.mealDtoOrderResponse?.name}</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Create Date : {order?.time}</Text>
                    </View>
                </View>
            </View>
            <View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", }}>
                {
                    order?.status?.includes("PAID") ?
                        (
                            <TouchableOpacity style={{ elevation: 5, width: '60%', padding: 10, borderRadius: 30, backgroundColor: '#FFD580', margin: 10 }}
                                onPress={() => onHandleCompletedOrder(order?.orderId)}
                            >
                                <Text style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Cancel</Text>
                            </TouchableOpacity>
                        )
                        : ""
                }
            </View>
        </SafeAreaView>
    )
}

export default OrderCancelScreen

const styles = StyleSheet.create({
    textItem: {
        fontWeight: "bold",
        fontSize: 12,
    },

    header: {
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
    },
    cartcard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: Colors.white,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    titleText: {
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
    actionButton: {
        width: 80,
        height: 30,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
    },
    topNavigate: {
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    card: {
        padding: 20,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: 'white',
        elevation: 5
    }
});