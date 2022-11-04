import { Typography } from '@mui/material';
import { BasketList } from '../../components/BasketList';
import { useBasket } from './useBasket';

export const Basket = () => {
    const [basketProducts] = useBasket();

    return (
        <>
            {basketProducts.length ? (
                <BasketList products={basketProducts} />
            ) : (
                <Typography sx={{ p: 3 }}>Your basket is empty</Typography>
            )}
        </>
    );
};
