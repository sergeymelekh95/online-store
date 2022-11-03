import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectBasketProducts } from './basketSlice';
//если не надо будет удалить из зависимосетй
// import { useSnackbar } from 'notistack';

export const usePreviewBasket = () => {
    // const { enqueueSnackbar } = useSnackbar();

    const [anchorEl, setAnchorEl] = useState(null);

    const basketProducts = useSelector(selectBasketProducts);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    useEffect(() => {
        // if (basketProducts.length) {
        //     enqueueSnackbar('Added in basket!');
        // }
    }, [basketProducts /*enqueueSnackbar*/]);

    return [id, handleClick, basketProducts, open, anchorEl, handleClose];
};
