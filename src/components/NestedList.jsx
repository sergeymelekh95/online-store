import { List } from '@mui/material';

import { Categories } from './Categories';
import { Filters } from './Filters';

export const NestedList = () => {
    return (
        <List>
            <Categories />
            <Filters />
        </List>
    );
};
