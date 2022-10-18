import { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import {
    selectProductById,
    selectProductInfo,
    loadProductById,
} from './detailsSlice';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const photos = [
    {
        src: 'https://dummyjson.com/image/i/products/1/1.jpg',
        width: 4,
        height: 4,
    },
    {
        src: 'https://dummyjson.com/image/i/products/1/2.jpg',
        width: 2,
        height: 2,
    },
    {
        src: 'https://dummyjson.com/image/i/products/1/3.jpg',
        width: 1,
        height: 1,
    },
    {
        src: 'https://dummyjson.com/image/i/products/1/4.jpg',
        width: 3,
        height: 3,
    },
];

export const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const product = useSelector(selectProductById);
    const { status, error } = useSelector(selectProductInfo);

    useEffect(() => {
        dispatch(loadProductById(id));
    }, [id, dispatch]);

    // const [currentImage, setCurrentImage] = useState(0);
    // const [viewerIsOpen, setViewerIsOpen] = useState(false);

    // const openLightbox = useCallback((event, { photo, index }) => {
    //     setCurrentImage(index);
    //     setViewerIsOpen(true);
    // }, []);

    // const closeLightbox = () => {
    //     setCurrentImage(0);
    //     setViewerIsOpen(false);
    // };

    return (
        <div>
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <Loader />}
            {status === 'received' && (
                <>
                    <h3>{product.title}</h3>
                    {/* <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map((x) => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title,
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway> */}
                </>
            )}
        </div>
    );
};
