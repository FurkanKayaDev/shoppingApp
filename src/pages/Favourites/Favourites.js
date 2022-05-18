import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import styles from './Favourites.styles';
import {REMOVE_FAV} from '../../Redux/detailSlice/detailSlice';
import Loading from '../../components/Loading';
import EmptyPage from './EmptyPage';

function Favourites({navigation}) {
  const favourites = useSelector(state => state.details.favourites);
  const dispatch = useDispatch();

  const remove = fav => {
    dispatch(REMOVE_FAV(fav));
  };

  const handleGoDetail = id => {
    navigation.navigate('DetailPage', {id});
  };

  return (
    <View style={{backgroundColor: '#e0e0e0', flex: 1}}>
      <ScrollView>
        {favourites.length === 0 && <EmptyPage />}
        {favourites.map(fav => (
          <TouchableOpacity
            style={styles.container}
            key={fav.id}
            onPress={() => handleGoDetail(fav.id)}>
            <Image style={styles.image} source={{uri: fav.image}} />
            <View style={styles.content}>
              <Text style={styles.title}>{fav.title}</Text>
              <Text style={styles.price}>{fav.price} $</Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => remove(fav.id)}>
                <Text style={styles.btn_text}>Kaldır</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default Favourites;
