import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  image: {
    width: 150,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
  },
  inner_container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: '#e0e0e0',
    borderBottomWidth: 0.8,
    borderColor: '#3e4a5b',
    marginVertical: 10,
  },
  container_price: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'right',
    color: 'green',
    fontWeight: 'bold',
    color: 'black',
  },
  complete: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 20,
    borderColor: 'orange',
  },
  btn_text: {
    fontSize: 22,
    color: '#3e4a5b',
  },
  price: {
    fontSize: 26,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    fontStyle: 'italic',
    color: 'black',
  },

  price_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
  },
  footer: {
    marginHorizontal: 15,
  },

  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
    color: 'black',
  },

  content: {
    width: windowWidth / 2.1,
    justifyContent: 'space-around',
  },

  price_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    color: 'black',
  },
  empty: {
    alignItems: 'center',
    marginVertical: 270,
  },

  empty_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3e4a5b',
    color: 'black',
  },
});
