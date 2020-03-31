import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { create } from 'react-test-renderer';
import thunk from 'redux-thunk';

export const middlewares = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

export const store = createStoreWithMiddleware(rootReducer);

export default store;
