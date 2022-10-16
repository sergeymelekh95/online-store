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

import { capitalize } from '../functions/capitalize';
import { removeDash } from '../functions/removeDash';

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

export const Categories = () => {
    const [openCategories, setOpenCategories] = useState(false);

    const handleClick = () => {
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
            <Collapse in={openCategories} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                    {categories.map((category) => (
                        <ListItemButton
                            to={`/products/${category}`}
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
        </>
    );
};
