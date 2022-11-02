import { Badge, IconButton, Popover } from '@mui/material';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { BasketList } from '../../components/BasketList';
import { usePreviewBasket } from './usePreviewBasket';

export const PreviewBasket = () => {
    const [id, handleClick, basketProducts, open, anchorEl, handleClose] =
        usePreviewBasket();

    return (
        <>
            <IconButton
                size='large'
                aria-describedby={id}
                onClick={handleClick}
            >
                <Badge badgeContent={basketProducts.length} color='error'>
                    <ShoppingBasketOutlinedIcon />
                </Badge>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <BasketList products={basketProducts} />

            </Popover>
        </>
    );
};
