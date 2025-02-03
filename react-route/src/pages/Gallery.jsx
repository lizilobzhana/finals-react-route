import React, { useEffect, useState } from "react";
import axios from "axios";
import "./gallery.css";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=4")
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error));
  }, []);

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
              className="favouriteBtn"
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
