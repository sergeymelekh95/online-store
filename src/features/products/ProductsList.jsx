import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Paper, Grid, Pagination, Stack } from '@mui/material';

import { experimentalStyled as styled } from '@mui/material/styles';

import { MediaCard } from '../../components/MediaCard';
import { Loader } from '../../components/Loader';

import { usePagination } from '../../hooks/usePagination';

import {
    loadProducts,
    selectProductsInfo,
    selectAllProducts,
} from './productsSlice';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const ProductsList = () => {
    let [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const { status, error, qty } = useSelector(selectProductsInfo);
    const products = useSelector(selectAllProducts);

    const PER_PAGE = 6;
    const count = Math.ceil(products.length / PER_PAGE);
    const _DATA = usePagination(products, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    useEffect(() => {
        if (!qty) {
            dispatch(loadProducts());
        }
    }, [qty, dispatch]);

    return (
        <>
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <Loader />}

            {status === 'received' && (
                <>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 2, sm: 8, md: 12 }}
                    >
                        {_DATA.currentData().map((product) => (
                            <Grid item xs={2} sm={4} md={4} key={product.id}>
                                <Item>
                                    <MediaCard {...product} />
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                    <Stack
                        spacing={2}
                        sx={{ alignItems: 'center' }}
                        mt={4}
                        mb={2}
                    >
                        <Pagination
                            count={count}
                            size='large'
                            page={page}
                            variant='outlined'
                            onChange={handleChange}
                        />
                    </Stack>
                </>
            )}
        </>
    );
};
