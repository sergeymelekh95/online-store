import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { DEFAULT_CATEGORY } from '../../constants';
import {
    selectProductsInfo,
    selectAllProducts,
    loadAllProducts,
    loadProductsByCategory,
    selectProductsByCategory,
    loadProductsByKeyword,
    selectFoundProducts,
} from './productsSlice';

export const useProducts = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const { pathname, search } = useLocation();
    const productsInfo = useSelector(selectProductsInfo);
    const productsAll = useSelector(selectAllProducts);
    const selectedProductsByCategory = useSelector(selectProductsByCategory);
    const foundProducts = useSelector(selectFoundProducts);

    useEffect(() => {
        if (search) {
            dispatch(loadProductsByKeyword(search.split('=')[1].toLowerCase()));
        }
        if (
            category === DEFAULT_CATEGORY &&
            !productsInfo.quantityOfAllProducts
        ) {
            dispatch(loadAllProducts());
        }

        if (category !== DEFAULT_CATEGORY) {
            dispatch(loadProductsByCategory(category));
        }
    }, [category, productsInfo.quantityOfAllProducts, dispatch, search]);

    return [
        category,
        productsInfo,
        productsAll,
        selectedProductsByCategory,
        DEFAULT_CATEGORY,
        search,
        foundProducts,
    ];
};
