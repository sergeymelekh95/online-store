import { Link } from 'react-router-dom';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Rating,
} from '@mui/material';

export const MediaCard = ({ title, thumbnail, price, rating, id }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
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
                    sx={{mr: 1}}
                >
                    More
                </Button>
                <Button variant='contained'>USD {price}</Button>
            </CardActions>
        </Card>
    );
};
