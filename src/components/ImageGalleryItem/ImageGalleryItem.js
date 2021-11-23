import { useState } from "react";
import "./ImageGalleryItem.css";
import Modal from "../Modal";

export default function ImageGalleryItem({ webformatURL, bigImage }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <li className="ImageGalleryItem" onClick={toggleModal}>
        <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
      </li>
      {showModal && <Modal onClose={toggleModal} bigImage={bigImage} />}
    </>
  );
}
