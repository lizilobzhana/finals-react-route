import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
import heroImage from "../images/lizi.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome
      </motion.h1>
      <motion.img
        src={heroImage}
        alt="Hero"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.button
        onClick={() => navigate("/gallery")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Go To Gallery
      </motion.button>
    </div>
  );
};

export default Home;
