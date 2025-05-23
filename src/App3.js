// App.js
import "./styles.css";
import React from "react";
import Person from "./Person"; // Person component import

export default function App() {
  return (
    <div className="App3">
      <h2>People Info</h2>

      <Person
        image="https://randomuser.me/api/portraits/men/32.jpg"
        name="Rahim"
        age={28}
      />

      <Person
        image="https://randomuser.me/api/portraits/women/65.jpg"
        name="Fatema"
        age={24}
      />

      <Person
        image="https://randomuser.me/api/portraits/men/11.jpg"
        name="Karim"
        age={32}
      />
    </div>
  );
}
