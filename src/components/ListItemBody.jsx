import { Typography, Box, capitalize } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CURRENCY } from '../constants';
import { BasketButton } from './BasketButton';
import { addQuantity, minusQuantity } from '../features/basket/basketSlice';
import { OldPrice } from './OldPrice';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PreviewBasketContext } from '../features/basket/PreviewBasket';

export const ListItemBody = ({
    isBasketPath,
    title,
    price,
    quantity,
    id,
    discountPercentage,
}) => {
    const handleClose = useContext(PreviewBasketContext);

    return (
        <Box
            sx={
                isBasketPath
                    ? {
                          display: 'flex',
                          width: '100%',
                          justifyContent: 'space-around',
                          mr: 3,
                      }
                    : { mr: 3, width: '100%' }
            }
        >
            <Typography
                color='black'
                sx={{ minWidth: 250, fontSize: 18, textDecoration: 'none' }}
                component={Link}
                to={`/shop/product/${id}`}
                onClick={!isBasketPath ? handleClose : null}
            >
                {capitalize(title)}
            </Typography>
            <Box sx={{ minWidth: 170 }}>
                <Typography>
                    {price * quantity} {CURRENCY}
                </Typography>
                {discountPercentage && isBasketPath ? (
                    <OldPrice
                        price={price}
                        discountPercentage={discountPercentage}
                    />
                ) : null}
            </Box>
            <Box>
                <BasketButton
                    value={id}
                    action={addQuantity}
                    variant='outlined'
                >
                    <AddIcon />
                </BasketButton>
                <Typography
                    component='span'
                    sx={{
                        display: 'inline-block',
                        textAlign: 'center',
                        minWidth: 30,
                    }}
                >
                    {quantity}
                </Typography>
                <BasketButton
                    value={id}
                    action={minusQuantity}
                    variant='outlined'
                >
                    <RemoveIcon />
                </BasketButton>
            </Box>
        </Box>
    );
};
