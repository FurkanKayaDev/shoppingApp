import React from 'react';
import {View, Text} from 'react-native';
import styles from './Cart.styles';

function EmptyPage() {
  return (
    <View style={styles.empty}>
      <Text style={styles.empty_text}>Please add a product to Cart</Text>
    </View>
  );
}

export default EmptyPage;
