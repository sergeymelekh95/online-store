import { Link } from 'react-router-dom';
import DiscountIcon from '@mui/icons-material/Discount';
import { CURRENCY } from '../constants';
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
import { useHandleBasket } from '../hooks/useHandleBasket';
import { addProduct } from '../features/basket/basketSlice';

export const MediaCard = (product) => {
    const { title, thumbnail, price, rating, id, discountPercentage } = product;
    const [handleClick] = useHandleBasket(addProduct);

    return (
        <Card sx={{ maxWidth: 345, margin: '0 auto', position: 'relative' }}>
            {!!discountPercentage && (
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
                <Button
                    variant='contained'
                    onClick={() => handleClick(product)}
                >
                    {CURRENCY} {price}
                </Button>
                {!!discountPercentage && (
                    <Typography
                        ml={1}
                        sx={{ textDecoration: 'line-through' }}
                        component='span'
                    >
                        {CURRENCY}{' '}
                        {discountPercentage
                            ? parseInt(
                                  countPrice(price, discountPercentage) * 100
                              ) / 100
                            : price}
                    </Typography>
                )}
            </CardActions>
        </Card>
    );
};
