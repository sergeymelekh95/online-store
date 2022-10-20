import { Typography, Grid, Button, Rating, Box } from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';
import { CURRENCY } from '../../constants';
import { countPrice } from '../../functions/countPrice';

export const DetailDescription = ({
    title,
    price,
    description,
    rating,
    discountPercentage,
}) => {
    return (
        <Grid item lg={6} sx={{ position: 'relative' }}>
            <Typography variant='h4' component='h4'>
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
                    {CURRENCY}{' '}
                    {discountPercentage
                        ? parseInt(
                              countPrice(price, discountPercentage) * 100
                          ) / 100
                        : price}
                </Typography>{' '}
                {!!discountPercentage && (
                    <Typography
                        sx={{ textDecoration: 'line-through' }}
                        component='span'
                        variant='h5'
                        color='primary'
                    >
                        {CURRENCY} {price}
                    </Typography>
                )}
            </Box>
            <Typography component='p' mb={3}>
                {description}
            </Typography>
            <br />
            <Box textAlign='end' pr={4}>
                <Button variant='contained'>Add to cart</Button>
            </Box>
        </Grid>
    );
};
