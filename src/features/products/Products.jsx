import { Toolbar, Typography, Box } from '@mui/material';
import { SortSelect } from '../../features/filters/SortSelect';
import { ProductsList } from './ProductsList';
import { capitalize } from '../../functions/capitalize';
import { removeDash } from '../../functions/removeDash';
import { useProducts } from './useProducts';

export const Products = () => {
    const [category, productsInfo, products, search] = useProducts();

    return (
        <>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant='h4'>
                    {search
                        ? products.length > 0
                            ? `Search results: ${products.length} items found`
                            : 'Nothing was found'
                        : capitalize(removeDash(category))}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h5'>First at:</Typography>
                    <SortSelect />
                </Box>
            </Toolbar>
            <ProductsList
                productsInfo={productsInfo}
                products={products}
            />
        </>
    );
};
