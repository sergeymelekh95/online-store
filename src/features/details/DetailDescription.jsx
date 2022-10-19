import { Typography, Grid, Button, Rating } from '@mui/material';

export const DetailDescription = ({ title, price, description, rating }) => {
    return (
        <Grid item lg={6}>
            <Typography variant='h3'>{title}</Typography>
            <Typography variant='h4'>{`${price} USD`}</Typography>
            <Typography variant='p'>{`${description} USD`}</Typography>
            <br />
            <Rating
                name='half-rating-read'
                defaultValue={rating}
                precision={0.5}
                readOnly
            />
            <br />
            <Button variant='contained'>Add to cart</Button>
        </Grid>
    );
};
