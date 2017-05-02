 // @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { AppRegistry } from 'react-native';
import reducer from './app/reducer';
import AppContainer from './app/container/AppContainer';
const logger = createLogger({ predicate: (state, action) => __DEV__ });

const initialState = {
  calendarState: {
    title: 'OneCal quick entry',
    isFetching: true,
    events: []
  }
}

const configureStore = (initialState) => {
  const features = compose(
    applyMiddleware(thunkMiddleware, logger)
  );

  return createStore(reducer, initialState, features);
};

const store = configureStore(initialState);

const App = () => (
  <Provider store= { store }>
    <AppContainer />
  </Provider>
);

AppRegistry.registerComponent('OneCal', () => App);
