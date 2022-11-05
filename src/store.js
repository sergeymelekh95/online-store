import axios from 'axios';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import * as api from './config';
import { productReducer } from './features/products/productsSlice';
import { categoriesReducer } from './features/categories/categoriesSlice';
import { detailsReducer } from './features/details/detailsSlice';
import { filtersReducer } from './features/filters/filtersSlice';
import { basketReducer } from './features/basket/basketSlice';

const rootReducer = combineReducers({
    products: productReducer,
    categories: categoriesReducer,
    details: detailsReducer,
    filters: filtersReducer,
    basket: basketReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['basket'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    client: axios,
                    api,
                },
            },
            serializableCheck: {
                ignoreActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
