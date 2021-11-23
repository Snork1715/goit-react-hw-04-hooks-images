import { useState, useEffect } from "react";
import "./App.css";
import Skeleton from "./components/Skeleton";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import FetchImages from "./services/FetchImage";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imagesType, setImagesType] = useState("");
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (imagesType && page === 1) {
      setImages([]);
      setLoading(true);
      setTimeout(() => {
        FetchImages.fetchImage(imagesType, page)
          .then(({ hits }) => {
            setImages(hits);
          })
          .catch((error) => setError(error))
          .finally(() => {
            setLoading(false);
          });
      }, 1000);
    }
  }, [imagesType, page]);

  useEffect(() => {
    if (page !== 1) {
      setLoading(true);
      setTimeout(() => {
        FetchImages.fetchImage(imagesType, page)
          .then(({ hits }) =>
            setImages((prevImages) => [...prevImages, ...hits])
          )
          .finally(() => {
            setLoading(false);
          });
      }, 1500);
    }
  }, [imagesType, page]);

  const getImageType = (imType) => {
    setImagesType(imType);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={getImageType} />
      {error && <div>{error.message}</div>}
      {loading && <Skeleton />}
      <ImageGallery images={images} />
      {images.length !== 0 && !loading ? (
        <Button onClick={handleLoadMore} />
      ) : images.length !== 0 && loading ? (
        <Skeleton />
      ) : (
        ""
      )}
    </div>
  );
}
