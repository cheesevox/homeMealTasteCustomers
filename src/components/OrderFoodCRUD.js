import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FoodListScreen from '../screens/FoodListScreen';
import OrderScreen from '../screens/OrderScreen';
const Stack = createNativeStackNavigator();

// create app context



const AppContext = React.createContext(null);

export const useAppContext = () => {
  return React.useContext(AppContext);
};

function OrderFoodCRUD() {
  const [products, setProducts] = React.useState([]);

  const addProductToCard = product => {
    // check product
    const existedProduct = products.find(item => item.id === product.id);
    if (existedProduct) {
      setProducts([
        ...products.filter(item => item.id !== product.id),
        {...existedProduct, quantity: (existedProduct.quantity || 0) + 1},
      ]);
    } else {
      setProducts([...products, {...product, quantity: 1}]);
    }
  };

  const removeProduct = product => {
    const existedProduct = products.find(item => item.id === product.id);
    if (existedProduct && existedProduct.quantity === 1) {
      return setProducts([...products.filter(item => item.id !== product.id)]);
    }
    if (existedProduct) {
      setProducts([
        ...products.filter(item => item.id !== product.id),
        {...existedProduct, quantity: (existedProduct.quantity || 0) - 1},
      ]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        products: products.sort((p1, p2) => p1.name.localeCompare(p2.name)),
        addProductToCard,
        removeProduct,
      }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={FoodListScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default OrderFoodCRUD;