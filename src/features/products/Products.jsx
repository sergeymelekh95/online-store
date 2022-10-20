import { Toolbar, Typography, Box } from '@mui/material';
import { SortSelect } from '../../components/SortSelect';
import { ProductsList } from './ProductsList';
import { capitalize } from '../../functions/capitalize';
import { removeDash } from '../../functions/removeDash';
import { useProducts } from './useProducts';

export const Products = () => {
    const [
        category,
        productsInfo,
        productsAll,
        selectedProductsByCategory,
        DEFAULT_CATEGORY,
        search,
        foundProducts,
    ] = useProducts();

    return (
        <>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant='h4'>
                    {search
                        ? foundProducts.length > 0
                            ? `Search results: ${foundProducts.length} items found`
                            : 'Nothing was found'
                        : capitalize(removeDash(category))}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h5'>Sort by:</Typography>
                    <SortSelect />
                </Box>
            </Toolbar>
            <ProductsList
                productsInfo={productsInfo}
                products={
                    search
                        ? foundProducts
                        : category === DEFAULT_CATEGORY
                        ? productsAll
                        : selectedProductsByCategory
                }
            />
        </>
    );
};
