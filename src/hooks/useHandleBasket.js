import { useDispatch } from 'react-redux';

export const useHandleBasket = (action) => {
    const dispatch = useDispatch();
    const handleClick = (item) => dispatch(action(item));

    return [handleClick];
};
