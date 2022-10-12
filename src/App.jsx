import { Stack } from '@mui/material';

import { Header } from './layout/Header';
import { MainSection } from './layout/MainSection';
import { Footer } from './layout/Footer';

const App = () => {
    return (
        <Stack
            sx={{ width: '100%', height: '100vh' }}
            spacing={2}
            justifyContent='center'
            color='secondary'
        >
            <Header />
            <MainSection />
            <Footer />
        </Stack>
    );
};

export default App;
