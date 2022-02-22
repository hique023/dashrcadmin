// Global
import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import firebase from "../../firebaseConfig.js";

// Styles
import "./styles.css";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState();
  const db = firebase.firestore();

  function handleLogin(e) {
    e.preventDefault();

    console.log(name, email, active);
    // console.log("Tipo de active:" + typeof active);

    setName("");
    setEmail("");
    // setActive();

    db.collection("users")
      .doc(email)
      .set({
        name: name,
        email: email,
        active: active,
      })
      .then((docRef) => {
        alert("Analista cadastrado com sucesso!");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        alert(
          "Erro ao cadastrar dados, por gentileza, reinicie a página e tente novamente!"
        );
      });
  }

  return (
    <div className="addUserContainer">
      <TopBar name="Add User" />
      <div className="addUserContent">
        <section className="form">
          <form onSubmit={handleLogin}>
            <input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="checkboxActive">
              <h1 id="textAnalist">Analista ativo?</h1>
              <select
                name="group"
                value={active}
                onChange={(e) => {
                  setActive(e.target.value === "true" ? true : false);
                }}
              >
                <option hidden>-</option>
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </div>

            {/* <div className="checkboxActive">
              <h1 id="textAnalist">Analista ativo?</h1>
              <div className="checkboxActiveYes">
                <h1>Sim</h1>
                <input
                  name="activeCheck"
                  value={true}
                  type="radio"
                  onChange={(e) => {
                    setActive(e.target.value);
                  }}
                />
              </div>
              <div className="checkboxActiveNo">
                <h1>Não</h1>
                <input
                  name="activeCheck"
                  value={false}
                  type="radio"
                  onChange={(e) => {
                    setActive(e.target.value);
                  }}
                />
              </div>
            </div> */}
            <button className="button" type="submit">
              Adicionar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
