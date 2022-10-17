import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import * as api from './config';
import { productReducer } from './features/products/productsSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
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
