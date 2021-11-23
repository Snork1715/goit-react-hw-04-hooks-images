import ImageGalleryItem from "../ImageGalleryItem";
import "./ImageGallery.css";

export default function ImageGallery({ images }) {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          bigImage={image.largeImageURL}
        />
      ))}
    </ul>
  );
}
