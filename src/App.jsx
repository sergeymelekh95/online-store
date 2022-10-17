import { Stack } from '@mui/material';
import { Header } from './layout/Header';
import { MainSection } from './layout/MainSection';
import { Footer } from './layout/Footer';

export const App = () => {
    return (

            <Stack
                sx={{ width: '100%', height: '100vh' }}
                spacing={2}
                backgroundColor='primary'
            >
                <Header />
                <MainSection />
                <Footer />
            </Stack>

    );
};
