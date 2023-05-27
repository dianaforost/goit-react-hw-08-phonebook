import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './contacts/contactsSlice';
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
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    contacts : persistedReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    filter: filtersReducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
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