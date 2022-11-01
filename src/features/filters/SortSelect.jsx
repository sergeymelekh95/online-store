import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { SORTING_TYPES } from '../../constants';
import { capitalize } from '../../functions/capitalize';
import useSort from './useSort';

export const SortSelect = () => {
    const [currentSort, handleChange] = useSort();

    return (
        <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Sort</InputLabel>
                <Select
                    value={currentSort}
                    label='sort'
                    onChange={handleChange}
                >
                    {SORTING_TYPES.map((sortingType, index) => (
                        <MenuItem key={index} value={sortingType}>
                            {capitalize(sortingType)}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};
