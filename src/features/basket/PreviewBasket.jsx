import { Link } from 'react-router-dom';
import {
    Badge,
    IconButton,
    Popover,
    Typography,
    Button,
    Box,
} from '@mui/material';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { BasketList } from '../../components/BasketList';
import { useBasket } from './useBasket';
import { useBasketPath } from '../../hooks/useBasketPath';
import { createContext } from 'react';

export const PreviewBasketContext = createContext();

export const PreviewBasket = () => {
    const [basketProducts, id, handleClick, open, anchorEl, handleClose] =
        useBasket();

    const [isBasketPath] = useBasketPath();

    return (
        <>
            <IconButton
                size='large'
                aria-describedby={id}
                onClick={!isBasketPath ? handleClick : null}
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
                {basketProducts.length ? (
                    <>
                        <PreviewBasketContext.Provider value={handleClose}>
                            <BasketList products={basketProducts} />
                        </PreviewBasketContext.Provider>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'end',
                                mb: 2,
                                pr: 2,
                            }}
                        >
                            <Button
                                variant='outlined'
                                component={Link}
                                to={`/shop/basket`}
                                onClick={handleClose}
                            >
                                Go to basket
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Typography sx={{ p: 3 }}>Your basket is empty</Typography>
                )}
            </Popover>
        </>
    );
};
