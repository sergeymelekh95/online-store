import { Link } from 'react-router-dom';
import DiscountIcon from '@mui/icons-material/Discount';
import { MIN_VALUE_FOR_DISCOUNT, CURRENCY } from '../constants';
import { isDiscount } from '../functions/isDiscount';
import { countPrice } from '../functions/countPrice';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Rating,
} from '@mui/material';

export const MediaCard = ({
    title,
    thumbnail,
    price,
    rating,
    id,
    discountPercentage,
}) => {
    return (
        <Card sx={{ maxWidth: 345, margin: '0 auto', position: 'relative' }}>
            {isDiscount(discountPercentage, MIN_VALUE_FOR_DISCOUNT) && (
                <DiscountIcon
                    fontSize='large'
                    sx={{ position: 'absolute', bottom: 5, right: 0 }}
                />
            )}
            <CardMedia
                component='img'
                height='140'
                image={thumbnail}
                alt={title}
            />
            <CardContent sx={{ textAlign: 'start' }}>
                <Typography gutterBottom variant='h5' component='h5'>
                    {title}
                </Typography>
                <Rating
                    name='half-rating-read'
                    defaultValue={rating}
                    precision={0.5}
                    readOnly
                />
            </CardContent>
            <CardActions>
                <Button
                    variant='contained'
                    component={Link}
                    to={`/shop/product/${id}`}
                    sx={{ mr: 1 }}
                >
                    More
                </Button>
                <Button variant='contained'>
                    {CURRENCY}{' '}
                    {countPrice(
                        price,
                        discountPercentage,
                        MIN_VALUE_FOR_DISCOUNT
                    ).toFixed()}
                </Button>
                {isDiscount(discountPercentage, MIN_VALUE_FOR_DISCOUNT) && (
                    <Typography
                        ml={1}
                        sx={{ textDecoration: 'line-through' }}
                        component='span'
                    >
                        {CURRENCY} {price}
                    </Typography>
                )}
            </CardActions>
        </Card>
    );
};
