import { Box, AppBar, Toolbar, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Logo } from '../components/Logo';
import { SearchForm } from '../features/products/SearchForm';
import { HeaderControls } from '../components/HeaderControls';
import { NavTabs } from '../components/NavTabs';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    '&': {
        paddingLeft: 0,
        paddingRight: 0,
    },
}));

export const Header = () => {
    return (
        <Box>
            <AppBar position='static' color='primary'>
                <Container maxWidth='xl'>
                    <StyledToolbar>
                        <Logo />
                        <SearchForm />
                        <HeaderControls />
                    </StyledToolbar>
                    <StyledToolbar>
                        <NavTabs />
                    </StyledToolbar>
                </Container>
            </AppBar>
        </Box>
    );
};
