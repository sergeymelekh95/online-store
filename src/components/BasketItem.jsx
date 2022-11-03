import {
    ListItemText,
    ListItem,
    Avatar,
    ListItemAvatar,
    Typography,
    Box,
    Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { CURRENCY } from '../constants';
import { BasketButton } from './BasketButton';
import {
    removeProduct,
    addQuantity,
    minusQuantity,
} from '../features/basket/basketSlice';

export const BasketItem = ({ id, title, thumbnail, quantity, price }) => {
    return (
        <ListItem key={id}>
            <ListItemAvatar>
                <Avatar
                    sx={{ height: '75px', width: '75px', mr: 2 }}
                    variant='rounded'
                    alt={title}
                    src={thumbnail}
                />
            </ListItemAvatar>
            <ListItemText sx={{ mr: 3 }}>
                <Typography>{title}</Typography>
                <Typography>
                    {price * quantity} {CURRENCY}
                </Typography>
                <Box>
                    <BasketButton value={id} action={addQuantity} variant='outlined'>
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
                    <BasketButton value={id} action={minusQuantity} variant='outlined'>
                        <RemoveIcon />
                    </BasketButton>
                </Box>
            </ListItemText>
            <BasketButton value={id} action={removeProduct} variant='outlined'>
                <DeleteIcon />
            </BasketButton>
        </ListItem>
    );
};
