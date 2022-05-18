import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    width: windowWidth / 2.3,
    height: 180,
    margin: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    justifyContent: 'space-between',
  },
  image: {
    width: windowWidth / 2.4,
    height: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    marginLeft: 3,
  },
  body_container: {
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#3e4a5b',
  },
  price: {
    fontSize: 10,
    fontStyle: 'italic',
    color: '#3e4a5b',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  star: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
});
