import s from './ImageGaiieryItem.module.scss';

const ImageGalleryItem = ({ images, setLargeURL }) =>
  images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li key={id}>
      <img
        onClick={() => setLargeURL(largeImageURL)}
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItem__image}
      />
    </li>
  ));

export default ImageGalleryItem;
