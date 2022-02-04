// Global
import React from "react";

// Styles
import "./styles.css";

export default function TopBar(props) {
  return (
    <div className="TopBarContainer">
      <h1>{props.name}</h1>
    </div>
  );
}
