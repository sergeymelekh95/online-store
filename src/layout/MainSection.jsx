import { Grid, Container, Box } from '@mui/material';

import { Main } from './Main';
import { Saidbar } from './Saidbar';

export const MainSection = () => {
    return (
        <Box>
            <Container maxWidth='xl'>
                <Grid
                    container
                    spacing={2}
                    direction={{  lg: 'row', md: 'column' }}
                >
                    <Grid item lg={2} md={10} sm={12} xs={12}>
                        <Saidbar />
                    </Grid>
                    <Grid item lg={10}>
                        <Main />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
