import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import App from './App';

function Wrapper() {
  return (
    <Provider store={store}>
      <App />
      <FlashMessage position="top" />
    </Provider>
  );
}

export default Wrapper;
