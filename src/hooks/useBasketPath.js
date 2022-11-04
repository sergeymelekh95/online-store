import { useLocation } from 'react-router-dom';

export const useBasketPath = () => {
    const location = useLocation();
    const isBasketPath = location.pathname === '/shop/basket';
    return [isBasketPath];
};
