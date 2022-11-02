import { Typography, Grid, Button, Rating, Box } from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';
import { CURRENCY } from '../../constants';
import { countPrice } from '../../functions/countPrice';
import { useHandleBasket } from '../../hooks/useHandleBasket';
import { addProduct } from '../basket/basketSlice';

export const DetailDescription = (product) => {
    const { title, price, description, rating, discountPercentage } = product;
    const [handleClick] = useHandleBasket(addProduct);

    return (
        <Grid item lg={6} sx={{ position: 'relative' }}>
            <Typography variant='h4' component='h4' sx={{ maxWidth: '390px' }}>
                {title}
            </Typography>
            <Rating
                name='half-rating-read'
                defaultValue={rating}
                precision={0.5}
                readOnly
            />
            {!!discountPercentage && (
                <Box sx={{ position: 'absolute', top: 57, right: 30 }}>
                    <Typography variant='h6' component='span'>
                        - {discountPercentage}%
                    </Typography>
                    <DiscountIcon fontSize='large' />
                </Box>
            )}
            <Box mt={2} mb={2}>
                <Typography variant='h5' component='span' mr={3}>
                    {CURRENCY} {price}
                </Typography>{' '}
                {!!discountPercentage && (
                    <Typography
                        sx={{ textDecoration: 'line-through' }}
                        component='span'
                        variant='h5'
                        color='primary'
                    >
                        {CURRENCY}{' '}
                        {discountPercentage
                            ? parseInt(
                                  countPrice(price, discountPercentage) * 100
                              ) / 100
                            : price}
                    </Typography>
                )}
            </Box>
            <Typography component='p' mb={3}>
                {description}
            </Typography>
            <br />
            <Box textAlign='end' pr={4}>
                <Button
                    variant='contained'
                    onClick={() => handleClick(product)}
                >
                    Add to cart
                </Button>
            </Box>
        </Grid>
    );
};
