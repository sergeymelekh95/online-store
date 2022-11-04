import { List, ListItem, Typography } from '@mui/material';
import { CURRENCY } from '../constants';
import { BasketItem } from './BasketItem';

export const BasketList = ({ products }) => {
    const total = products.reduce(
        (acc, cur) => acc + cur.price * cur.quantity,
        0
    );

    return (
        <List>
            {products.map((product) => (
                <BasketItem key={product.id} {...product} />
            ))}
            <ListItem
                sx={{
                    display: 'flex',
                    justifyContent: 'end',
                }}
            >
                <Typography variant='h6'>
                    Total: {total} {CURRENCY}
                </Typography>
            </ListItem>
        </List>
    );
};
