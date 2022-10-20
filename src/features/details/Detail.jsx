import { Grid } from '@mui/material';
import { Loader } from '../../components/Loader';

import { DetailDescription } from './DetailDescription';
import { ImagesGallery } from './ImagesGallery';
import { useDetail } from './useDetail';

export const Detail = () => {
    const [error, status, product] = useDetail();

    return (
        <div>
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <Loader />}
            {status === 'received' && (
                <Grid container spacing={7} direction='row' justifyContent='center'>
                    <ImagesGallery images={product.images} />
                    <DetailDescription {...product} />
                </Grid>
            )}
        </div>
    );
};
