import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './Cart.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  REMOVE_CART,
  REMOVE_CART_ALL,
} from '../../Redux/detailSlice/detailSlice';
import {showMessage} from 'react-native-flash-message';
import EmptyPage from '../Cart/EmptyPage';

function Cart({item}) {
  const Cart = useSelector(state => state.details.cart);
  const [complete, setComplete] = useState(true);
  const [color, setColor] = useState('gray');
  const dispatch = useDispatch();

  var totalPrice = 0;
  Cart.map(element =>
    (totalPrice += Math.round(Number(element.price) * 100) / 100).toFixed(2),
  );
  useEffect(() => {
    if (totalPrice === 0) {
      setComplete(true);
      setColor('#b2b2b2');
    } else {
      setComplete(false);
      setColor('orange');
    }
  }, [totalPrice]);

  const remove = item => {
    dispatch(REMOVE_CART(item));
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {Cart.length === 0 && <EmptyPage />}
        <View>
          {Cart.map(item => (
            <View key={item.id} style={styles.inner_container}>
              <View>
                <Image style={styles.image} source={{uri: item.image}} />
              </View>
              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity
                  style={styles.title}
                  onPress={() => remove(item.id)}>
                  <Text style={{textAlign: 'right'}}>
                    <Icon name="cart-remove" size={28} color="red" />
                  </Text>
                </TouchableOpacity>
                <View style={styles.price_container}>
                  <Text style={styles.price_text}>Price</Text>
                  <Text style={styles.container_price}>{item.price}$</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.total}>
          <Text style={styles.price}>Total Price:</Text>
          <Text style={{...styles.price, color: 'green'}}>{totalPrice}$</Text>
        </View>
        <TouchableOpacity
          style={{...styles.complete, backgroundColor: color}}
          disabled={complete}
          onPress={() => dispatch(REMOVE_CART_ALL())}>
          <Text style={styles.btn_text}>Complete the Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Cart;
