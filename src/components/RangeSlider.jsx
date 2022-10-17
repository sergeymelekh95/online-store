import { useState } from 'react';
import { Typography, Box, Slider } from '@mui/material';

export const RangeSlider = () => {
    const [value, setValue] = useState([200, 1000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
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
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay='auto'
                min={150}
                max={1500}
            />
        </Box>
    );
}
