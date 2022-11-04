import { Typography } from '@mui/material';
import { CURRENCY } from '../constants';
import { countOldPrice } from '../functions/countOldPrice';

export const OldPrice = ({ price, discountPercentage, variant }) => {
    const oldPrice =
        parseInt(countOldPrice(price, discountPercentage) * 100) / 100;

    return (
        <Typography
            sx={{ textDecoration: 'line-through' }}
            variant={variant}
            color='primary'
            component='span'
        >
            {oldPrice} {CURRENCY}
        </Typography>
    );
};
