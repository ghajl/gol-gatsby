/* eslint-disable */
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/store';

require("./src/static/rc-slider/index.css");

const store = createStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      {element}
    </Provider>
  )
};
