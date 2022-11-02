import {
    ListItemText,
    List,
    ListItem,
    Avatar,
    ListItemAvatar,
    Typography,
} from '@mui/material';

export const BasketList = ({ products }) => {
    console.log(products);

    return (
        <List>
            {products.map((product) => (
                <ListItem key={product.id}>
                    <ListItemAvatar>
                        <Avatar
                            sx={{ height: '80px', width: '80px' }}
                            variant='rounded'
                            alt={product.title}
                            src={product.thumbnail}
                        />
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography>{product.title}</Typography>
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    );
};
