import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import CategoryIcon from '@mui/icons-material/Category';
import FilterListIcon from '@mui/icons-material/FilterList';

const categories = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration',
    'furniture',
    'tops',
    'womens-dresses',
    'womens-shoes',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'womens-watches',
    'womens-bags',
    'womens-jewellery',
    'sunglasses',
    'automotive',
    'motorcycle',
    'lighting',
];

export default function NestedList() {
    const [open, setOpen] = React.useState(true);
    const [openFilter, setOpenFilter] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleFilter = () => {
        setOpenFilter(!openFilter);
    };

    return (
        <List
        // sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        // sx={{maxHeight: '100vh', overflow: 'auto'}}
        // component='nav'
        // aria-labelledby='nested-list-subheader'
        // subheader={
        //     <ListSubheader component='div' id='nested-list-subheader'>
        //         Nested List Items
        //     </ListSubheader>
        // }
        >
            <ListItemButton onClick={handleFilter} >
                <ListItemIcon sx={{minWidth: 30}}>
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText sx={{textAlign: 'center'}} primary='Categories' />
                {openFilter ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openFilter} timeout='auto' unmountOnExit >
                <List component='div' disablePadding>
                    {categories.map((category) => (
                        <ListItemButton sx={{ pl: 4 }} key={category}>
                            <ListItemText primary={category} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <FilterListIcon />
                </ListItemIcon>
                <ListItemText primary='Filters' />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary='Starred' />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary='Starred' />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary='Starred' />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary='Starred' />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}

export const Saidbar = () => {
    return (
        <aside>
            <NestedList />
        </aside>
    );
};
