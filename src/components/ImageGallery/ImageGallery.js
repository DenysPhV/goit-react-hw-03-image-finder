import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.scss';

const ImageGallery = ({ images, setLargeURL }) => (
  <ul className={s.ImageGallery}>
    <ImageGalleryItem images={images} setLargeURL={setLargeURL} />
  </ul>
);

export default ImageGallery;
