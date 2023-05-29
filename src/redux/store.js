import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistedReducerContacts } from './contacts/contactsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { filtersReducer } from './filtersSlice';
import { persistedReducerAuth } from './auth/authSlice';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
export const store = configureStore({
  reducer: {
    auth:  persistReducer(authPersistConfig, authReducer),
    contacts: persistedReducerContacts,
    filter: filtersReducer,
  },
  // reducer: {
  //   contacts : persistedReducer,
  //   auth: persistedReducerAuth,
  //   filter: filtersReducer
  // },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
// export const store = configureStore({
//     reducer: {
//       contacts : persistReducer,
//     //   filters: filtersReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//   });

export const persistor = persistStore(store);