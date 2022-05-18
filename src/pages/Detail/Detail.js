import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDetails} from '../../Redux/detailSlice/detailSlice';
import styles from './Detail.style';
import DetailsCard from '../../components/DetailsCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Detail({route}) {
  const {id} = route.params;
  const details = useSelector(state => state.details.items);
  const status = useSelector(state => state.details.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch]);

  return (
    <View style={{backgroundColor: '#e0e0e0', flex: 1}}>
      {status === 'loading' && <Loading />}
      {status !== 'loading' && (
        <View>
          <DetailsCard item={details} />
        </View>
      )}
    </View>
  );
}

export default Detail;
