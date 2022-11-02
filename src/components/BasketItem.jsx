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
import { removeProduct } from '../features/basket/basketSlice';
import { useHandleBasket } from '../hooks/useHandleBasket';

export const BasketItem = ({ id, title, thumbnail, quantity, price }) => {
    const [handleClick] = useHandleBasket(removeProduct);

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
                    <Button variant='outlined'>
                        <AddIcon />
                    </Button>
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
                    <Button variant='outlined'>
                        <RemoveIcon />
                    </Button>
                </Box>
            </ListItemText>
            <Button variant='outlined' onClick={() => handleClick(id)}>
                <DeleteIcon />
            </Button>
        </ListItem>
    );
};
