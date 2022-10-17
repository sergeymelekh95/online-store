import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toolbar, Typography, Box } from '@mui/material';
import { SortSelect } from '../../components/SortSelect';
import { ProductsList } from './ProductsList';
import { capitalize } from '../../functions/capitalize';
import { removeDash } from '../../functions/removeDash';
import { DEFAULT_CATEGORY } from '../../constants';
import {
    selectProductsInfo,
    selectAllProducts,
    loadAllProducts,
    loadProductsByCategory,
    selectProductsByCategory,
} from './productsSlice';

export const Products = () => {
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

    return (
        <>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant='h4'>
                    {capitalize(removeDash(category))}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h5'>Sort by:</Typography>
                    <SortSelect />
                </Box>
            </Toolbar>
            <ProductsList
                productsInfo={productsInfo}
                products={
                    category === DEFAULT_CATEGORY
                        ? productsAll
                        : selectedProductsByCategory
                }
            />
        </>
    );
};
