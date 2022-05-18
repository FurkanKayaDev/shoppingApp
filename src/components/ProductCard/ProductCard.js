import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './ProductCard.style';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from '../Loading';
import {useSelector} from 'react-redux';

function ProductCard({product}) {
  const status = useSelector(state => state.products.status);
  return (
    <View style={styles.container}>
      {status === 'loading' && <Loading />}
      {status !== 'loading' && (
        <View style={{justifyContent: 'space-between'}}>
          <View style={{borderBottomWidth: 0.5}}>
            <Image style={styles.image} source={{uri: product.image}} />
          </View>
          <View style={styles.body_container}>
            <Text style={styles.title} numberOfLines={1}>
              {product.title}
            </Text>
            <View style={styles.content}>
              <Text style={styles.price}>{product.price} $ </Text>
              <View style={{flexDirection: 'row'}}>
                <Stars
                  half={true}
                  default={product.rating.rate}
                  starSize={12}
                  disabled={true}
                  fullStar={<Icon name={'star'} style={styles.myStarStyle} />}
                  emptyStar={
                    <Icon
                      name={'star-outline'}
                      style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                    />
                  }
                  halfStar={
                    <Icon name={'star-half'} style={[styles.myStarStyle]} />
                  }
                />
                <Text style={{fontSize: 10, color: '#3e4a5b'}}>
                  ({product.rating.count})
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

export default ProductCard;
