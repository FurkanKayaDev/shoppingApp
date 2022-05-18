import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    width: 150,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 5,
  },
  container: {
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    borderColor: '#3e4a5b',
    backgroundColor: '#3e4a5b',
  },
  content: {
    justifyContent: 'space-around',
    minWidth: 150,
    maxWidth: 150,
  },
  btn: {
    borderWidth: 0.5,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  btn_text: {
    color: 'white',
    fontWeight: 'bold',
    padding: 6,
  },
  price: {
    fontStyle: 'italic',
    fontSize: 14,
    textAlign: 'right',
    color: 'white',
    marginVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
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
