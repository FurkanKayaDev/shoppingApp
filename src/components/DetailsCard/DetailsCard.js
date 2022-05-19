import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './DetailsCard.styles';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_FAVOURITES, ADD_CART} from '../../Redux/detailSlice/detailSlice';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import Loading from '../Loading';

function DetailsCard({item}) {
  const status = useSelector(state => state.details.status);
  const fav = useSelector(state => state.details.favourites);
  const dispatch = useDispatch();

  const addFavourites = item => {
    dispatch(ADD_FAVOURITES(item));
  };
  const addCart = item => {
    dispatch(ADD_CART(item));
  };
  return (
    <View style={styles.container}>
      {status === 'loading' && <Loading />}
      {status === 'success' && (
        <View>
          <ScrollView>
            <Image style={styles.image} source={{uri: item.image}} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.content}>
              <Text style={styles.price}>
                <Text style={styles.inlince_price}>Price</Text> {item.price} ${' '}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Stars
                  half={true}
                  default={item.rating.rate}
                  disabled={true}
                  fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
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
                <Text style={(styles.price, {color: 'black', fontSize: 16})}>
                  ({item.rating.count})
                </Text>
              </View>
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text style={styles.desc_title}>Product Description</Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => addFavourites(item)}>
                <Text style={styles.btn_text}>Add favourite</Text>
                <Icon
                  name="cards-heart"
                  size={16}
                  color="black"
                  style={{marginLeft: 5}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.card}
                onPress={() => addCart(item)}>
                <Text style={styles.btn_text}>Add to cart</Text>
                <Icon
                  name="cart"
                  size={16}
                  color="black"
                  style={{marginLeft: 5}}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

export default DetailsCard;
