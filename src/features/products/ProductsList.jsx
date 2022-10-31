import { useState } from 'react';
import { Paper, Grid, Pagination, Stack } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { MediaCard } from '../../components/MediaCard';
import { Loader } from '../../components/Loader';
import { usePagination } from '../../hooks/usePagination';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const ProductsList = ({ productsInfo, products }) => {
    let [page, setPage] = useState(1);

    const { error, status } = productsInfo;

    const PER_PAGE = 6;
    const count = Math.ceil(products.length / PER_PAGE);

    const data = usePagination(products, PER_PAGE);

    const handleChange = (event, page) => {
        setPage(page);
        data.jump(page);
    };

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
                        {data.currentData().map((product) => (
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
