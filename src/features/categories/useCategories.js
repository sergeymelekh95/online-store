import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAllCategories,
    loadAllCategories,
    selectCategoriesInfo,
} from '../categories/categoriesSlice';

export const useCategories = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectAllCategories);
    const { status, error, quantityOfAllCategories } =
        useSelector(selectCategoriesInfo);

    useEffect(() => {
        if (!quantityOfAllCategories) {
            dispatch(loadAllCategories());
        }
    }, [quantityOfAllCategories, dispatch]);

    return [categories, {status, error}];
};
