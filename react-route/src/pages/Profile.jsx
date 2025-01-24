import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { name } = useParams();

  return (
    <div className="profile">
      <h1>Made By {name || "James"}</h1>
    </div>
  );
};

export default Profile;
