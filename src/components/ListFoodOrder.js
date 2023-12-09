import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import {useAppContext} from '../components/OrderFoodCRUD';
  

  const ListFoodOrder = ({products = []}) => {
    const {addProductToCard, removeProduct} = useAppContext();
    const renderItem = ({item}) => {
      return (
        <View style={styles.item}>
          <Image style={styles.img} source={item.img} />
          <View style={styles.itemBody}>
            <View style={styles.textHeader}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.category}>{item.categoryName}</Text>
            </View>
  
            <View style={styles.footer}>
              <Text style={styles.priceView}>
                <Text style={styles.price}>{item.pricePerKg}</Text>
                <Text> /Kg </Text>
              </Text>
              <View style={styles.groupAction}>
                <TouchableOpacity onPress={() => removeProduct(item)}>
                  <Image source={require('../../assets/images/ic-remove.png')} />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity || 0}</Text>
                <TouchableOpacity onPress={() => addProductToCard(item)}>
                  <Image source={require('../../assets/images/ic-add.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
    };
  
    return (
      <FlatList
        data={products}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.hr} />}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    );
  };
  
  export default ListFoodOrder;
  
  const styles = StyleSheet.create({
    list: {
      paddingVertical: 14,
    },
    item: {
      flexDirection: 'row',
    },
    price: {
      fontSize: 14,
      fontWeight: '600',
      color: '#000000',
    },
    priceView: {
      fontSize: 12,
      color: '#A1A1A1',
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: '500',
    },
  
    category: {
      fontSize: 9,
      marginTop: 6,
    },
  
    itemBody: {
      flex: 1,
      paddingLeft: 8,
    },
  
    textHeader: {
      flex: 1,
    },
  
    groupAction: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    quantity: {
      fontSize: 13,
      paddingHorizontal: 8,
    },
  
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    img: {
      height: 80,
      width: 120,
    },
  
    hr: {
      height: 18,
    },
  });