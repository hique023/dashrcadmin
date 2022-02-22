// Global
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar";
import User from "../../components/User";

// Styles
import "./styles.css";

export default function Home() {
  const navigate = useNavigate();

  function addUser(e) {
    e.preventDefault();
    navigate("/adduser");
  }

  return (
    <div className="homeContainer">
      <TopBar name="Home" />
      <form onSubmit={addUser}>
        <button className="button" type="submit">
          Adicionar Usuário
        </button>
      </form>
      <div className="homeContent">
        <User name="Pedro" email="a@a" active="true" />
      </div>
    </div>
  );
}
