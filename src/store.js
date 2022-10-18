import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import * as api from './config';
import { productReducer } from './features/products/productsSlice';
import { categoriesReducer } from './features/categories/categoriesSlice';
import { detailsReducer } from './features/details/detailsSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoriesReducer,
        details: detailsReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    client: axios,
                    api,
                },
            },
            serializableCheck: false,
        }),
});
