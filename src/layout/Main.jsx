import { Routes, Route, Navigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { Products } from '../pages/Products';
import { NotFound } from '../pages/NotFound';
import { Delivery } from '../pages/Delivery';
import { Payment } from '../pages/Payment';
import { About } from '../pages/About';
// import { Detail } from '../pages/Detail';

export const Main = () => {
    return (
        <Box sx={{ flexGrow: 1 }} component='main'>
            <Routes>
                <Route
                    path='/'
                    element={<Navigate to='/products' replace />}
                ></Route>
                <Route path='/products' element={<Products />}></Route>
                {/* <Route path='/products/:category' element={<Detail />}></Route> */}
                <Route path='/about' element={<About />}></Route>
                <Route path='/delivery' element={<Delivery />}></Route>
                <Route path='/payment' element={<Payment />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </Box>
    );
};
