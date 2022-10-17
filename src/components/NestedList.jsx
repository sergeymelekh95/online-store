import { List } from '@mui/material';
import { Categories } from '../features/categories/Categories';
import { Filters } from './Filters';

export const NestedList = () => {
    return (
        <List>
            <Categories />
            <Filters />
        </List>
    );
};
