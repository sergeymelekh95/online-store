import { useEffect, useState } from 'react';

import { NavLink, useLocation } from 'react-router-dom';
import { Box, Tab } from '@mui/material';

import { TabContext, TabList } from '@mui/lab';

export const NavTabs = () => {
    const location = useLocation();
    const [value, setValue] = useState(location.pathname);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setValue(location.pathname);
    }, [location.pathname]);

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        justifyContent: 'center',
                    }}
                >
                    <TabList
                        centered
                        onChange={handleChange}
                        aria-label='lab API tabs example'
                        textColor='secondary'
                        indicatorColor='secondary'
                    >
                        <Tab
                            label='Shop'
                            to='/products'
                            component={NavLink}
                            value='/products'
                        />
                        <Tab
                            label='About'
                            to='/about'
                            component={NavLink}
                            value='/about'
                        />
                        <Tab
                            label='Delivery'
                            to='/delivery'
                            component={NavLink}
                            value='/delivery'
                        />
                        <Tab
                            label='Payment'
                            to='/payment'
                            component={NavLink}
                            value='/payment'
                        />
                    </TabList>
                </Box>
            </TabContext>
        </Box>
    );
};
