import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { Products } from '../features/products/Products';
import { NotFound } from '../pages/NotFound';
import { Delivery } from '../pages/Delivery';
import { Payment } from '../pages/Payment';
import { About } from '../pages/About';
import { Detail } from '../pages/Detail';
import { Shop } from '../pages/Shop';
import { DEFAULT_CATEGORY } from '../constants';

export const Main = () => {
    return (
        <Box sx={{ flexGrow: 1 }} component='main'>
            <Routes>
                <Route
                    path='/'
                    element={
                        <Navigate
                            to={`/shop/products/${DEFAULT_CATEGORY}`}
                            replace
                        />
                    }
                ></Route>
                <Route path='/shop' element={<Shop />}>
                    <Route
                        path='products/:category'
                        element={<Products />}
                    ></Route>
                    <Route path='product/:id' element={<Detail />} />
                </Route>
                <Route index path='/about' element={<About />}></Route>
                <Route index path='/delivery' element={<Delivery />}></Route>
                <Route index path='/payment' element={<Payment />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </Box>
    );
};
