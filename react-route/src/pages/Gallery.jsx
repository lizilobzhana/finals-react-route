import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import "./gallery.css";

const Gallery = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const {
    data: photos,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/photos?_limit=4");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const toggleFavorite = (photo) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === photo.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== photo.id);
    } else {
      updatedFavorites = [...favorites, photo];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="gal-container">
      <h1>Gallery</h1>
      <div className="gal-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="gal-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
            <button
              className={
                favorites.some((fav) => fav.id === photo.id)
                  ? "unfavoriteBtn"
                  : "favoriteBtn"
              }
              onClick={() => toggleFavorite(photo)}
            >
              {favorites.some((fav) => fav.id === photo.id)
                ? "Unfavorite"
                : "Favorite"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
