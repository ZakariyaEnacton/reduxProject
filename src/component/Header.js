import {View, Text} from 'react-native';
import hStyle from '../Style/hStyle';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState();
  console.log('cartData :', cartData);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View>
      <Text style={hStyle.text}>{cartItems}</Text>
    </View>
  );
};

export default Header;
