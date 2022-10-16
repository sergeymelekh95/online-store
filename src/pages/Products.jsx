import { useParams } from 'react-router-dom';

import { Toolbar, Typography, Box } from '@mui/material';

import { SortSelect } from '../components/SortSelect';

import { capitalize } from '../functions/capitalize';
import { removeDash } from '../functions/removeDash';

import { DEFAULT_CATEGORY } from '../constants/constants';
import { ProductsList } from '../features/products/ProductsList';

export const Products = () => {
    const { category } = useParams();

    return (
        <>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant='h4'>
                    {capitalize(removeDash(category) || DEFAULT_CATEGORY)}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h5'>Sort by:</Typography>
                    <SortSelect />
                </Box>
            </Toolbar>
            <ProductsList />
        </>
    );
};
