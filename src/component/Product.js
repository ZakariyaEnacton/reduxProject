import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';
import pStyle from '../Style/pStyle';
import {useDispatch} from 'react-redux';
import {addToCart} from './redux/action';

const Product = props => {
  const item = props.item;

  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };
  return (
    <View style={pStyle.container}>
      <Text style={pStyle.text}>{item.name}</Text>
      <Text style={pStyle.text}>{item.color}</Text>
      <Text style={pStyle.text}>{item.price}</Text>
      <Image style={pStyle.image} source={{uri: item.image}} />
      <TouchableOpacity
        onPress={() => handleAddToCart(item)}
        style={pStyle.button}
        activeOpacity={0.7}>
        <Text style={pStyle.buttonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product;
