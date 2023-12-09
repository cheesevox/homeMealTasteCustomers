import { FlatList, StyleSheet, Text, View, Icon, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons';
import { user } from '../Constant';

const UserCard = ({item ,navigation}) => {
    return (
        <View style={{justifyContent:'center', alignItems:'center', marginTop:20, marginHorizontal:30}}>
            <Image
                source={item.image}
                style={{ borderRadius: 50, width:200, height: 200, resizeMode: "cover" }}
            />
                <Text style={{  marginTop:10,fontWeight: 'bold', fontSize: 26, color:'orange' }}>{item.name}</Text>
            <View style={styles.cartcard}>
                <View style={{
                    height: 250,
                    marginLeft: 10,
                    paddingVertical: 20,
                    marginHorizontal:50,
                    justifyContent:'space-between',
                    fontWeight:"",
                    flex: 1
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("OrderCart")}
                >
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}
                    >
                    <Ionicons 
                    name='wallet-outline' size={25} paddingHorizontal={5}> Wallet
                     </Ionicons>
                    <Text style={{ fontSize:20}}>{item.wallet}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='wallet-outline' size={25} paddingHorizontal={5}> Setting </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='wallet-outline' size={25} paddingHorizontal={5}> Help </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='wallet-outline' size={25} paddingHorizontal={5}> Term & Policy</Ionicons>
                </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
};

export default UserCard;

const styles = StyleSheet.create({
    cartcard: {
        height: 250,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: Colors.white,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    actionButton: {
        width: 80,
        height: 30,
        backgroundColor: Colors.primary,
        borderRadius: 30,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    }
});
