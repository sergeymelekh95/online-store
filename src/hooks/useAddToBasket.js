import { useDispatch } from 'react-redux';
import { addProduct } from '../features/basket/basketSlice';

export const useAddToBasket = () => {
    const dispatch = useDispatch();
    const handleClick = (product) => dispatch(addProduct(product));

    return [handleClick];
};
