import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  image: {
    width: windowWidth,
    height: windowHeight / 2,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
  },
  container: {
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginHorizontal: 10,
  },
  desc_title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    borderBottomWidth: 0.5,
    color: 'black',
  },
  desc: {
    fontSize: 14,
    lineHeight: 20,
    color: 'black',
    fontStyle: 'italic',
  },
  myStarStyle: {
    color: 'orange',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    fontSize: 20,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  price: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'black',
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 4,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  card: {
    height: windowHeight / 14,
    width: windowWidth / 2.5,
    borderWidth: 1,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'orange',
    borderColor: 'orange',
    flexDirection: 'row',
  },
  inline_price: {
    fontSize: 16,
    fontStyle: 'normal',
    color: 'black',
  },
  btn_text: {
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent: 'space-between',
    color: 'black',
    alignItems: 'center',
    marginLeft: 5,
    textAlign: 'center',
  },
});
