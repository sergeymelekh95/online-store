import { ListItem, ListItemAvatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { BasketButton } from './BasketButton';
import { removeProduct } from '../features/basket/basketSlice';
import { useBasketPath } from '../hooks/useBasketPath';
import { ProductAvatar } from './ProductAvatar';
import { ListItemBody } from './ListItemBody';

export const BasketItem = ({ id, title, thumbnail, quantity, price, discountPercentage }) => {
    const [isBasketPath] = useBasketPath();

    return (
        <ListItem key={id}>
            <ListItemAvatar>
                <ProductAvatar
                    id={id}
                    isBasketPath={isBasketPath}
                    title={title}
                    thumbnail={thumbnail}
                />
            </ListItemAvatar>
            <ListItemBody
                isBasketPath={isBasketPath}
                title={title}
                price={price}
                quantity={quantity}
                id={id}
                discountPercentage={discountPercentage}
            />
            <BasketButton value={id} action={removeProduct} variant='outlined'>
                <DeleteIcon />
            </BasketButton>
        </ListItem>
    );
};
