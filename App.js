/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './src/Style/style';
import Header from './src/component/Header';
import Product from './src/component/Product';
import pStyle from './src/Style/pStyle';

const App = () => {
  const products = [
    {
      name: 'Apple',
      color: 'white',
      price: 130000,
      image:
        'https://www.iconpacks.net/icons/1/free-smartphone-icon-695-thumb.png',
    },
    {
      name: 'Samsung',
      color: 'black',
      price: 80000,
      image:
        'https://www.iconpacks.net/icons/1/free-smartphone-icon-695-thumb.png',
    },
    {
      name: 'Oppo',
      color: 'Blue',
      price: 30000,
      image:
        'https://www.iconpacks.net/icons/1/free-smartphone-icon-695-thumb.png',
    },
    {
      name: 'One Plus',
      color: 'gray',
      price: 70000,
      image:
        'https://www.iconpacks.net/icons/1/free-smartphone-icon-695-thumb.png',
    },
  ];
  return (
    <View style={style.container}>
      <Header />
      <ScrollView>
        <View>
          {products.map(item => (
            <Product item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
