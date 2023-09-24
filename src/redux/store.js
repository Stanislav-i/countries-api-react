import { configureStore } from "@reduxjs/toolkit";
import { countriesListReducer } from "./countryListSlice";
import { userQueriesReducer } from "./userQueriesSlice";
import { themeReducer } from "./themeSlice";
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
  
  const ThemePersistConfig = {
    key: 'theme',
    storage,
  };

export const store = configureStore({
    reducer: {
        countries: countriesListReducer,
        userQueries: userQueriesReducer,
        theme: persistReducer(ThemePersistConfig, themeReducer),
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);