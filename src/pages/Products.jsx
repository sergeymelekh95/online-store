import { useParams } from 'react-router-dom';

import { Paper, Grid, Toolbar, Typography, Box } from '@mui/material';

import { experimentalStyled as styled } from '@mui/material/styles';

import { MediaCard } from '../components/MediaCard';
import { SortSelect } from '../components/SortSelect';
import { Loader } from '../components/Loader';

import { capitalize } from '../functions/capitalize';
import { removeDash } from '../functions/removeDash';

import { DEFAULT_CATEGORY } from '../api';

const products = [
    {
        id: 1,
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
        images: [
            'https://dummyjson.com/image/i/products/1/1.jpg',
            'https://dummyjson.com/image/i/products/1/2.jpg',
            'https://dummyjson.com/image/i/products/1/3.jpg',
            'https://dummyjson.com/image/i/products/1/4.jpg',
            'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
        ],
    },
    {
        id: 2,
        title: 'iPhone X',
        description:
            'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
        images: [
            'https://dummyjson.com/image/i/products/2/1.jpg',
            'https://dummyjson.com/image/i/products/2/2.jpg',
            'https://dummyjson.com/image/i/products/2/3.jpg',
            'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
        ],
    },
    {
        id: 3,
        title: 'Samsung Universe 9',
        description:
            "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: 'Samsung',
        category: 'smartphones',
        thumbnail: 'https://dummyjson.com/image/i/products/3/thumbnail.jpg',
        images: ['https://dummyjson.com/image/i/products/3/1.jpg'],
    },
    {
        id: 4,
        title: 'OPPOF19',
        description: 'OPPO F19 is officially announced on April 2021.',
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: 'OPPO',
        category: 'smartphones',
        thumbnail: 'https://dummyjson.com/image/i/products/4/thumbnail.jpg',
        images: [
            'https://dummyjson.com/image/i/products/4/1.jpg',
            'https://dummyjson.com/image/i/products/4/2.jpg',
            'https://dummyjson.com/image/i/products/4/3.jpg',
            'https://dummyjson.com/image/i/products/4/4.jpg',
            'https://dummyjson.com/image/i/products/4/thumbnail.jpg',
        ],
    },
    {
        id: 5,
        title: 'Huawei P30',
        description:
            'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: 'Huawei',
        category: 'smartphones',
        thumbnail: 'https://dummyjson.com/image/i/products/5/thumbnail.jpg',
        images: [
            'https://dummyjson.com/image/i/products/5/1.jpg',
            'https://dummyjson.com/image/i/products/5/2.jpg',
            'https://dummyjson.com/image/i/products/5/3.jpg',
        ],
    },
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
            >
                {products.length ? (
                    products.map((product) => (
                        <Grid item xs={2} sm={4} md={4} key={product.id}>
                            <Item>
                                <MediaCard {...product} />
                            </Item>
                        </Grid>
                    ))
                ) : (
                    <Loader />
                )}
            </Grid>
        </>
    );
};
