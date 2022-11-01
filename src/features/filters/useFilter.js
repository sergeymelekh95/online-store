import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPrice, setFilteringParametersByPrice } from './filtersSlice';
import { selectProducts } from '../products/productsSlice';
import { getProductWithMaxPrice } from '../../functions/getProductWithMaxPrice';
import { getProductWithMinPrice } from '../../functions/getProductWithMinPrice';

const useFilter = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const price = useSelector(selectPrice);
    const [value, setValue] = useState(price);
    const [minMaxPrice, setMinMaxPrice] = useState([]);

    const handleChange = (event, newValue) => setValue(newValue);
    const handleChangeCommitted = () =>
        dispatch(setFilteringParametersByPrice(value));

    useEffect(() => {
        if (products.length) {
            const productWithMaxPrice = getProductWithMaxPrice(products);
            const productWithMinPrice = getProductWithMinPrice(products);
            setMinMaxPrice([
                productWithMinPrice.price,
                productWithMaxPrice.price,
            ]);
            dispatch(
                setFilteringParametersByPrice([
                    productWithMinPrice.price,
                    productWithMaxPrice.price,
                ])
            );
        }
    }, [products, dispatch, setMinMaxPrice]);

    useEffect(() => setValue(price), [price]);

    return [minMaxPrice, value, handleChange, handleChangeCommitted];
};

export default useFilter;
