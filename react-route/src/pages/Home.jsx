import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import heroImage from "../images/heroImage.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <img src={heroImage} alt="Hero" />
      <button onClick={() => navigate("/gallery")}>Go To Gallery</button>
    </div>
  );
};

export default Home;
