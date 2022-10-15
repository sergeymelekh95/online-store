import { BrowserRouter } from 'react-router-dom';

import { Stack } from '@mui/material';

import { Header } from './layout/Header';
import { MainSection } from './layout/MainSection';
import { Footer } from './layout/Footer';

const App = () => {
    return (
        <BrowserRouter basename='/online-store'>
            <Stack
                sx={{ width: '100%', height: '100%' }}
                spacing={2}
                backgroundColor='primary'
            >
                <Header />
                <MainSection />
                <Footer />
            </Stack>
        </BrowserRouter>
    );
};

export default App;
