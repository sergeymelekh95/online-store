import { Avatar } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PreviewBasketContext } from '../features/basket/PreviewBasket';

export const ProductAvatar = ({ isBasketPath, title, thumbnail, id }) => {
    const handleClose = useContext(PreviewBasketContext);

    return (
        <Avatar
            sx={
                isBasketPath
                    ? { height: '100px', width: '100px', mr: 2 }
                    : { height: '75px', width: '75px', mr: 2 }
            }
            variant='rounded'
            alt={title}
            src={thumbnail}
            component={Link}
            to={`/shop/product/${id}`}
            onClick={!isBasketPath ? handleClose : null}
        />
    );
};
