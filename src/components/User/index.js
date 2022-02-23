// Global
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../../firebaseConfig.js";

// Styles
import "./styles.css";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

export default function User(props) {
  const [active, setActive] = useState();
  const navigate = useNavigate();
  const db = firebase.firestore();

  function editUser() {
    localStorage.setItem("emailUser", props.email);
    navigate("/edituser");
  }

  function deleteUser() {
    localStorage.setItem("emailUser", props.email);
    console.log("Usuário deletado");
    db.collection("users").doc(localStorage.getItem("emailUser")).delete();
    props.getUsers();
  }

  function changeActive() {
    // console.log("Tipo de active: " + typeof props.active);
    // console.log(props.active);

    props.active === true ? setActive("Sim") : setActive("Não");
  }

  useEffect(() => {
    changeActive();
  }, []);

  return (
    <div className="UserContainer">
      <div className="UserContent">
        <div className="forms">
          {/* <form onSubmit={editUser}> */}
          {/* <button className="editUser" type="submit"> */}
          <button className="editUser" onClick={editUser}>
            <FiEdit size={20} color="var(--edit)" />
          </button>
          {/* </form> */}
          {/* <form onSubmit={deleteUser}> */}
          {/* <button className="deleteUser" type="submit"> */}
          <button className="deleteUser" onClick={deleteUser}>
            <BsTrash size={20} color="var(--edit)" />
          </button>
          {/* </form> */}
        </div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Ativo: {active}</h1>
      </div>
    </div>
  );
}
