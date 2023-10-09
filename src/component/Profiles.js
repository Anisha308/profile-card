import React from "react";
import './Profiles.css'

function Profile({ name, email }) {
  return (
    <div className="container">
      <div className="profile-card">
        <h2>{`${name}`}</h2>
        <p>{`${email}`}</p>
      </div>
    </div>
  );
}

export default Profile;
