import { Box, FormControlLabel, Switch } from '@mui/material';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { PreviewBasket } from '../features/basket/PreviewBasket';

export const HeaderControls = () => {
    return (
        <Box sx={{ minWidth: '183px' }}>
            <PreviewBasket />
            <FormControlLabel control={<Switch />} label={<NightlightIcon />} />
        </Box>
    );
};
