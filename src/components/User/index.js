// Global
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Styles
import "./styles.css";
import { FiEdit } from "react-icons/fi";

export default function User(props) {
  const navigate = useNavigate();

  function editUser(e) {
    e.preventDefault();
    navigate("/edituser");
  }

  return (
    <div className="UserContainer">
      <div className="UserContent">
        <form onSubmit={editUser}>
          <button className="editUser" type="submit">
            <FiEdit size={20} color="var(--edit)" />
          </button>
        </form>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Ativo: {props.active}</h1>
      </div>
    </div>
  );
}
