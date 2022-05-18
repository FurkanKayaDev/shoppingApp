import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Loading.styles';

function Loading() {
  return (
    <View style={styles.container}>
      <LottieView source={require('../../assets/loading.json')} autoPlay loop />
    </View>
  );
}

export default Loading;
