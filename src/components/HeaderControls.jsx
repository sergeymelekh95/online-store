import {
    Box,
    Badge,
    FormControlLabel,
    Switch,
    IconButton,
} from '@mui/material';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NightlightIcon from '@mui/icons-material/Nightlight';

export const HeaderControls = () => {
    return (
        <Box sx={{minWidth: '183px'}}>
            <IconButton size='large'>
                <Badge badgeContent={5} color='error'>
                    <ShoppingBasketOutlinedIcon />
                </Badge>
            </IconButton>
            <IconButton size='large'>
                <Badge badgeContent={3} color='error'>
                    <FavoriteBorderOutlinedIcon />
                </Badge>
            </IconButton>
            <FormControlLabel control={<Switch />} label={<NightlightIcon />} />
        </Box>
    );
};
