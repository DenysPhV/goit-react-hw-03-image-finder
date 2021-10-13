import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.scss';

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

ImageGalleryItem.propTypes = {
  setLargeURL: PropTypes.func.isRequired,
  image: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
