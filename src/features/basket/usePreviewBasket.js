import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectBasketProducts } from './basketSlice';

export const usePreviewBasket = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const basketProducts = useSelector(selectBasketProducts);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    useEffect(() => {}, [basketProducts]);

    return [id, handleClick, basketProducts, open, anchorEl, handleClose];
};
