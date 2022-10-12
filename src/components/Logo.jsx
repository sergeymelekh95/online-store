import { Typography, Stack, IconButton } from '@mui/material';

import ShopTwoOutlinedIcon from '@mui/icons-material/ShopTwoOutlined';

export const Logo = () => {
    return (
        <Stack direction='row' alignItems='center' component='a'>
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
    );
};
