import { Box, AppBar, Toolbar, Container } from '@mui/material';

import { styled } from '@mui/material/styles';

import { Logo } from '../components/Logo';
import { SearchForm } from '../components/SearchForm';
import { HeaderControls } from '../components/HeaderControls';

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
                </Container>
            </AppBar>
        </Box>
    );
};
