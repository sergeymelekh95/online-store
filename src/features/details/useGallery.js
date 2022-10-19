import { useState, useEffect } from 'react';

//for creating carousel and image gallery you need create array of objects
const createItemData = (arr) =>
    arr.map((src, i) => (!i ? { img: src, rows: 3, cols: 4 } : { img: src }));

export const useGallery = (images) => {
    const [photo, setPhoto] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = (event) => {
        setCurrentImage(event.target.id);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    useEffect(() => {
        setPhoto(createItemData(images));
    }, [images]);

    return [photo, openLightbox, viewerIsOpen, closeLightbox, currentImage];
};
