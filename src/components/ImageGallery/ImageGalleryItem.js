import React from 'react';

const ImageGalleryItem = ({ images, setLargeURL }) =>
  images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li key={id}>
      <img
        onClick={() => setLargeURL(largeImageURL)}
        src={webformatURL}
        alt={tags}
      />
    </li>
  ));

export default ImageGalleryItem;
