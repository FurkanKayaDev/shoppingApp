import React from 'react';
import {View, Text} from 'react-native';
import styles from './Favourites.styles';

function EmptyPage() {
  return (
    <View style={styles.empty}>
      <Text style={styles.empty_text}>Please add a product to favorites</Text>
    </View>
  );
}

export default EmptyPage;
