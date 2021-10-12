import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, setLargeURL }) => (
  <ul>
    <ImageGalleryItem images={images} setLargeURL={setLargeURL} />
  </ul>
);

export default ImageGallery;
