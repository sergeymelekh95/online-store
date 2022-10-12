import { Grid, Container, Box } from '@mui/material';

import { Main } from './Main';
import { Saidbar } from './Saidbar';

export const MainSection = () => {
    return (
        <Box flexGrow={1}>
            <Container maxWidth='xl'>
                <Grid
                    container
                    spacing={2}
                    direction={{ xs: 'column', md: 'row' }}
                >
                    <Grid item xs={2}>
                        <Saidbar />
                    </Grid>
                    <Grid item xs={10}>
                        <Main />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
