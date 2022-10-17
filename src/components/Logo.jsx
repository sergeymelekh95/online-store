import { NavLink } from 'react-router-dom';
import { Typography, Stack, IconButton, Link } from '@mui/material';
import ShopTwoOutlinedIcon from '@mui/icons-material/ShopTwoOutlined';
import { DEFAULT_CATEGORY } from '../constants';

export const Logo = () => {
    return (
        <Link
            color='secondary'
            underline='none'
            component={NavLink}
            to={`/products/${DEFAULT_CATEGORY}`}
        >
            <Stack direction='row' alignItems='center'>
                <IconButton size='large'>
                    <ShopTwoOutlinedIcon size='large' />
                </IconButton>
                <Typography
                    variant='h6'
                    component='div'
                    sx={{ flexGrow: 1, pr: 2, cursor: 'pointer' }}
                >
                    Store
                </Typography>
            </Stack>
        </Link>
    );
};
