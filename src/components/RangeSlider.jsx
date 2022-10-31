import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Typography, Box, Slider } from '@mui/material';
// import { selectPrice, setFilterByPrice } from '../features/filters/filtersSlice';

export const RangeSlider = () => {
    const [value, setValue] = useState([200, 1000]);

    // const price = useSelector(selectPrice);
    // const dispatch = useDispatch();

    const handleChange = (event, newValue) => {
        // dispatch(setFilterByPrice(newValue))
        // console.log(event)
        // console.log(newValue)
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
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={handleChange}
                step={50}
                valueLabelDisplay='auto'
                min={150}
                max={1500}
            />
        </Box>
    );
};
