import { useState } from "react";
import "./Searchbar.css";

export default function Searchbar({ onSubmit }) {
  const [imagesType, setImageType] = useState("");

  const handleClick = (event) => {
    setImageType(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (imagesType.trim() === "") {
      return;
    }
    onSubmit(imagesType);
    setImageType("");
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          value={imagesType}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleClick}
        />
      </form>
    </header>
  );
}
