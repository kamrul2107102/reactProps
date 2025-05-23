// Person.js
import React from "react";
import "./person.css"; // styling চাইলে আলাদা CSS ফাইল

export default function Person({ image, name, age }) {
  return (
    <div className="person-card">
      <img src={image} alt={name} className="person-image" />
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}
