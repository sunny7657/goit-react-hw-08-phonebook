import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import contactsReducer from './contacts-slice';
import filterReducer from './filter-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'], //this key we should add to local storage
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
