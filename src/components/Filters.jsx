import { useState } from 'react';
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { RangeSlider } from '../features/filters/RangeSlider';

export const Filters = () => {
    const [openFilter, setOpenFilter] = useState(true);

    const handleFilter = () => setOpenFilter(!openFilter);

    return (
        <>
            <ListItemButton onClick={handleFilter}>
                <ListItemIcon>
                    <FilterListIcon />
                </ListItemIcon>
                <ListItemText primary='Filters' />
                {openFilter ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openFilter} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                    <RangeSlider />
                </List>
            </Collapse>
        </>
    );
};
