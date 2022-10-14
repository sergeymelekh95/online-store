import { Container, AppBar, Typography } from '@mui/material';

export const Footer = () => {
    return (
        <AppBar
            position='static'
            color='primary'
            component='footer'
            sx={{ height: 70, justifyContent: 'center', textAlign: 'center' }}
        >
            <Container maxWidth='xl'>
                <Typography>Siarhei Melekh</Typography>
            </Container>
        </AppBar>
    );
};
