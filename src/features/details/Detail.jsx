import { Grid } from '@mui/material';
import { Loader } from '../../components/Loader';

import { DetailDescription } from './DetailDescription';
import { ImagesGallery } from './ImagesGallery';
import { useDetail } from './useDetail';

export const Detail = () => {
    const [error, status, product] = useDetail();

    console.log(product);

    return (
        <div>
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <Loader />}
            {status === 'received' && (
                <Grid container spacing={7} direction='row'>
                    <ImagesGallery images={product.images} />
                    <DetailDescription {...product} />
                </Grid>
            )}
        </div>
    );
};
