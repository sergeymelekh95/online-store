import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    selectProductById,
    selectProductInfo,
    loadProductById,
} from './detailsSlice';

export const useDetail = () => {
    const dispatch = useDispatch();

    const { id } = useParams();

    const product = useSelector(selectProductById);
    const { status, error } = useSelector(selectProductInfo);

    useEffect(() => {
        dispatch(loadProductById(id));
    }, [id, dispatch]);

    return [error, status, product];
};
