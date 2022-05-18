import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    width: windowWidth / 2.1,
    height: 233,
    margin: 3,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
    backgroundColor: 'white',
  },
  image: {
    width: windowWidth / 2.2,
    height: 170,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    marginLeft: 3,
    borderBottomWidth: 1,
  },
  body_container: {
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#3e4a5b',
  },
  price: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#3e4a5b',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  myStarStyle: {
    color: 'orange',
    backgroundColor: 'white',
    textShadowColor: 'gray',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
});
