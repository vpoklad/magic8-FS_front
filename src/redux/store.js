import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './auth/slices';

const authPersistConfig = {
          key: 'auth',
          storage,
          whitelist: ['token'],
}
const authPersistReducer = persistReducer(authPersistConfig, authReducer);

const middleware = [...getDefaultMiddleware ({
         serializableCheck: {
           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
     })
     ];

const store = configureStore({
         reducer: {
           auth: authPersistReducer,
         },
         middleware,
      devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore (store);

export {store, persistor};
