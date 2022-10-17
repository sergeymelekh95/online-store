import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    selectProductsInfo,
    selectAllProducts,
    loadAllProducts,
    loadProductsByCategory,
    selectProductsByCategory,
} from './productsSlice';
import { DEFAULT_CATEGORY } from '../../constants';

export const useProducts = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const productsInfo = useSelector(selectProductsInfo);
    const productsAll = useSelector(selectAllProducts);
    const selectedProductsByCategory = useSelector(selectProductsByCategory);

    useEffect(() => {
        if (
            category === DEFAULT_CATEGORY &&
            !productsInfo.quantityOfAllProducts
        ) {
            dispatch(loadAllProducts());
        }

        if (category !== DEFAULT_CATEGORY) {
            dispatch(loadProductsByCategory(category));
        }
    }, [category, productsInfo.quantityOfAllProducts, dispatch]);

    return [
        category,
        productsInfo,
        productsAll,
        selectedProductsByCategory,
        DEFAULT_CATEGORY,
    ];
};
