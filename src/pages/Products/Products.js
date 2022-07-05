import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../Redux/productSlice/productSlice';
import ProductCard from '../../components/ProductCard';
import styles from './Products.style';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Icon from 'react-native-vector-icons/AntDesign';

function Products({navigation}) {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.items);
  const status = useSelector(state => state.products.status);

  const handleGoDetail = id => {
    navigation.navigate('DetailPage', {id});
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, []);
  if (status === 'falsee') {
    return <Error message={error} />;
  }
  return (
    <View style={{backgroundColor: '#e0e0e0', flex: 1}}>
      {status === 'loading' && <Loading />}
      {status !== 'loading' && (
        <ScrollView>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 15,
              borderBottomWidth: 0.5,
              borderBottomColor: '#3e4a5b',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="shoppingcart"
                size={45}
                style={{marginRight: 10, color: 'orange'}}
              />
              <Text style={{fontSize: 35, color: 'orange', fontWeight: 'bold'}}>
                Shopping App
              </Text>
            </View>
            <Text style={{color: '#3e4a5b', marginVertical: 5}}>
              Fake store rest API for your e-commerce or shopping website
              prototype
            </Text>
          </View>
          <View style={styles.container}>
            {product.map(prd => (
              <View key={prd.id}>
                <TouchableOpacity onPress={() => handleGoDetail(prd.id)}>
                  <ProductCard product={prd} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default Products;
