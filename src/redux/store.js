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
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import authReducer from './auth/slices';
import balanceSlice from './balance/slice';
import reportsSlice from './reports/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const authPersistReducer = persistReducer(authPersistConfig, authReducer);

// const balancePersistConfig = {
//   key: 'value',
//   storage,
//   whitelist: ['value'],
// };

// const balancePersistReducer = persistReducer(
//   balancePersistConfig,
//   balanceSlice,
// );

const reportsPersistConfig = {
  key: 'data',
  storage,
  whitelist: ['data'],
};

const reportsPersistReducer = persistReducer(
  reportsPersistConfig,
  reportsSlice,
);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    balance: balanceSlice,
    reports: reportsPersistReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
