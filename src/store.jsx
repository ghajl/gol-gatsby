/* global window:true */
/* eslint no-underscore-dangle: 0 */
import { createStore } from 'redux';
import rootReducer from './reducer';

export default () => createStore(rootReducer);
