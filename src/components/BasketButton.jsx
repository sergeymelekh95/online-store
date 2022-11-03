import { Button } from '@mui/material';
import { useHandleBasket } from '../hooks/useHandleBasket';

export const BasketButton = ({ children, action, value, variant }) => {
    const [handleClick] = useHandleBasket(action);

    return (
        <Button variant={variant} onClick={() => handleClick(value)}>
            {children}
        </Button>
    );
};
