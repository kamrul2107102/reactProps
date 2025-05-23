import "./styles.css";
import React from "react";

const list = [1, 2, 3, 4, 5];

export default function App() {
  return (
    <div className="App">
      <ul>
        {list.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}
