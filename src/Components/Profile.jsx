import React from "react";

export default function Profile({ name, title, bio, img }) {
  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="personal">
        <div className="profile-photo-container">
          <div className="profile-photo-wrapper">
            <img src={img} alt={name} className="profile-photo" />
          </div>
        </div>
        <div className="name-title">
          <h1 className="name">{name}</h1>
          <h2 className="profile-title">{title}</h2>
        </div>
        </div>
        <div className="profile-info">
          <p className="profile-bio" style={{lineHeight: "35px", textAlign:"left"}}>{bio}</p>
        </div>
      </div>
    </section>
  );
}
