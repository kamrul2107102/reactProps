import "./styles.css";
import React from "react";

const people = [
  { id: 1, name: "Rahim", address: "Dhaka", phone: "01711111111" },
  { id: 2, name: "Karim", address: "Chittagong", phone: "01822222222" },
  { id: 3, name: "Fatema", address: "Khulna", phone: "01933333333" },
];

export default function App() {
  return (
    <div className="App">
      <h2>Person List</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <strong>Name:</strong> {person.name} <br />
            <strong>Address:</strong> {person.address} <br />
            <strong>Phone:</strong> {person.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
