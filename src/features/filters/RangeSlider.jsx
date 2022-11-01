import { Typography, Box, Slider } from '@mui/material';
import useFilter from './useFilter';

export const RangeSlider = () => {
    const [minMaxPrice, value, handleChange, handleChangeCommitted] =
        useFilter();

    return (
        <>
            {minMaxPrice && (
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                    <Typography>Price (USD):</Typography>
                    <Box sx={{ fontSize: '1.5rem', m: 2 }}>
                        <Box component='span'>{value[0]}</Box>
                        <Box component='span' sx={{ m: 2.5 }}>
                            -
                        </Box>
                        <Box component='span'>{value[1]}</Box>
                    </Box>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={value}
                        onChange={handleChange}
                        onChangeCommitted={handleChangeCommitted}
                        valueLabelDisplay='auto'
                        min={minMaxPrice[0]}
                        max={minMaxPrice[1]}
                    />
                </Box>
            )}
        </>
    );
};
