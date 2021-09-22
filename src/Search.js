import React, { useState } from "react";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [showcity, setShowcity] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setShowcity(true);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
    setShowcity(false);
  }

  return (
    <div>
      <form className="Form-container" onSubmit={handleSubmit}>
        <div className="Form">
          <input
            type="text"
            className="Search-city"
            placeholder="Search city"
            onChange={updateCity}
          />
          <button type="submit" className="Submit-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="Search-icon"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </form>
      <div> {showcity && `It is currently 40℉ in ${city}`}</div>
    </div>
  );
}
