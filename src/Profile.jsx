import React from 'react';

export default function Profile() {
  const image = "https://static.zerochan.net/Takane.Lui.full.4228892.jpg";
  return (
    <img 
      className="profile-image"
      src={image}
      alt="Profile"
    /> 
  );
}