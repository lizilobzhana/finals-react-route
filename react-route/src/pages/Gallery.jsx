import React from "react";
import useFetch from "../hooks/useFetch";
import "./gallery.css";

const Gallery = () => {
  const {
    data: photos,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/photos?_limit=4");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="gal-container">
      <h1>Gallery</h1>
      <div className="gal-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="gal-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
