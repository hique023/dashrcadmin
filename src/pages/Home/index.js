// Global
import React from "react";
import TopBar from "../../components/TopBar";
import User from "../../components/User";

// Styles
import "./styles.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <TopBar name="Home" />
      <div className="homeContent">
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}
