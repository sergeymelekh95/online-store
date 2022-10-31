import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { DEFAULT_CATEGORY } from '../../constants';
import {
    selectProductsInfo,
    loadAllProducts,
    loadProductsByCategory,
    loadProductsByKeyword,
    selectProducts,
    selectFilteredProducts
} from './productsSlice';
import {selectCurrentSort} from '../filters/filtersSlice';

export const useProducts = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const { pathname, search } = useLocation();
    const productsInfo = useSelector(selectProductsInfo);
    const currentSort = useSelector(selectCurrentSort);
    const products = useSelector((state) => selectFilteredProducts(state, currentSort));

    useEffect(() => {
        if (search) {
            dispatch(loadProductsByKeyword(search.split('=')[1].toLowerCase()));
        }

        if (!search && category === DEFAULT_CATEGORY) {
            dispatch(loadAllProducts());
        }

        if (!search && category !== DEFAULT_CATEGORY) {
            dispatch(loadProductsByCategory(category));
        }
    }, [category, dispatch, search]);

    useEffect(() => {}, [currentSort])

    return [category, productsInfo, products, search];
};
