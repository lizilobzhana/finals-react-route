import React, { useEffect, useState } from "react";
import axios from "axios";
import "./gallery.css";
const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=4")
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="gallery-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
