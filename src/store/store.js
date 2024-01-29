import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
