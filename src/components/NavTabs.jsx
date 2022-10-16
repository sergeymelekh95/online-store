import { Link } from 'react-router-dom';

import { Box, Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';

import { useRouteMatch } from '../hooks/useRouteMatch';
import { DEFAULT_CATEGORY } from '../constants/constants';

export const NavTabs = () => {
    const routeMatch = useRouteMatch([
        '/products/:category',
        '/about',
        '/delivery',
        '/payment',
    ]);
    const currentTab = routeMatch?.pattern?.path;

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={currentTab}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        justifyContent: 'center',
                    }}
                >
                    <TabList
                        centered
                        aria-label='lab API tabs example'
                        textColor='secondary'
                        indicatorColor='secondary'
                    >
                        <Tab
                            label='Shop'
                            to={`/products/${DEFAULT_CATEGORY}`} // 'phone' will be get from redux or from saidbar nav
                            component={Link}
                            value='/products/:category'
                        />
                        <Tab
                            label='About'
                            to='/about'
                            component={Link}
                            value='/about'
                        />
                        <Tab
                            label='Delivery'
                            to='/delivery'
                            component={Link}
                            value='/delivery'
                        />
                        <Tab
                            label='Payment'
                            to='/payment'
                            component={Link}
                            value='/payment'
                        />
                    </TabList>
                </Box>
            </TabContext>
        </Box>
    );
};
