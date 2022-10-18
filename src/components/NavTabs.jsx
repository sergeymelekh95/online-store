import { Link } from 'react-router-dom';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import { useRouteMatch } from '../hooks/useRouteMatch';
import { DEFAULT_CATEGORY } from '../constants';

export const NavTabs = () => {
    const routeMatch = useRouteMatch([
        '/shop/*',
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
                            to={`/shop/products/${DEFAULT_CATEGORY}`}
                            component={Link}
                            value='/shop/*'
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
