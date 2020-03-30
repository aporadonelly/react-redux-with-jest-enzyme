import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers';
import { create } from 'react-test-renderer';
import thunk from 'redux-thunk';

export const middlewares = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

export const store = createStoreWithMiddleware(RootReducer);

export default store;
