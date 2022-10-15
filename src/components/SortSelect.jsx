import { useState } from 'react';

import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export const SortSelect = () => {
    const [sort, setSort] = useState('popular');

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Sort</InputLabel>
                <Select value={sort} label='sort' onChange={handleChange}>
                    <MenuItem value='popular'>Popular</MenuItem>
                    <MenuItem value='price'>Price</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
