import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import Cart from './pages/Cart';

import Products from './pages/Products';
import Detail from './pages/Detail';
import Favourites from './pages/Favourites';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductPage"
        component={Products}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPage"
        component={Detail}
        options={{
          title: 'Product Detail',
          headerTitleAlign: 'center',
          headerTintColor: 'orange',
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomePage"
          component={HomeNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              const icon = focused ? 'bell' : 'home';
              return <Icon name="home" color={color} size={24} />;
            },
          }}
        />
        <Tab.Screen
          name="FavouritesPage"
          component={Favourites}
          options={{
            title: 'Favourites List',
            headerTitleAlign: 'center',
            headerTintColor: 'orange',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name={'heart'} size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="CartPage"
          component={Cart}
          options={{
            title: 'Cart',
            headerTitleAlign: 'center',
            headerTintColor: 'orange',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name={'shopping-cart'} size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
