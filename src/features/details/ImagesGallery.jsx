import { Grid } from '@mui/material';

import Carousel, { Modal, ModalGateway } from 'react-images';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useGallery } from './useGallery';

const setSrc = (image, size, rows = 1, cols = 1) => ({
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
        size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
});

export const ImagesGallery = ({ images }) => {
    const [photo, openLightbox, viewerIsOpen, closeLightbox, currentImage] =
        useGallery(images);

    return (
        <Grid item lg={6}>
            <ImageList
                sx={{
                    width: 500,
                    height: 450,
                    overflow: 'visible',
                }}
                variant='quilted'
                cols={4}
                rowHeight={121}
            >
                {photo.map((item, index) => (
                    <ImageListItem
                        key={item.img}
                        cols={item.cols || 1}
                        rows={item.rows || 1}
                        sx={{ cursor: 'pointer' }}
                    >
                        <img
                            {...setSrc(item.img, item.rows, item.cols)}
                            alt={item.title}
                            loading='lazy'
                            onClick={openLightbox}
                            id={index}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photo.map((x) => ({ source: x.img }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </Grid>
    );
};
