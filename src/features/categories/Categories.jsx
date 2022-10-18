import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import CategoryIcon from '@mui/icons-material/Category';
import { capitalize } from '../../functions/capitalize';
import { removeDash } from '../../functions/removeDash';
import { Loader } from '../../components/Loader';
import { useCategories } from './useCategories';

export const Categories = () => {
    const [categories, { status, error }] = useCategories();

    const [openCategories, setOpenCategories] = useState(false);

    const handleClick = (event) => {
        setOpenCategories(!openCategories);
    };

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText
                    sx={{ textAlign: 'center' }}
                    primary='Categories'
                />
                {openCategories ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <Loader />}

            {status === 'received' && (
                <Collapse in={openCategories} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        {categories.map((category) => (
                            <ListItemButton
                                to={`/shop/products/${category}`}
                                component={Link}
                                sx={{ pl: 4 }}
                                key={category}
                                onClick={handleClick}
                            >
                                <ListItemText
                                    primary={capitalize(removeDash(category))}
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};
