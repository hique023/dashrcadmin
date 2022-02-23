// Global
import React, { useState, useEffect } from "react";
import TopBar from "../../components/TopBar";
import firebase from "../../firebaseConfig.js";

// Styles
import "./styles.css";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState();
  const [emailLocal, setEmailLocal] = useState(
    localStorage.getItem("emailUser")
  );
  const db = firebase.firestore();

  function handleLogin(e) {
    e.preventDefault();

    db.collection("users")
      .doc(email)
      .set({
        name: name,
        email: email,
        active: active,
      })
      .then((docRef) => {
        alert("Analista atualizado com sucesso!");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        alert(
          "Erro ao atualizar dados, por gentileza, reinicie a página e tente novamente!"
        );
      });
  }

  function getPersonalData() {
    var docRef = db.collection("users").doc(emailLocal);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();

          setName(data.name);
          setEmail(data.email);
          setActive(data.active);
        } else {
          // doc.data() will be undefined in this case
          // console.log("No such document!");
          alert(
            "Falha ao carregar dados do analista, reinicia a página e tente novamente!"
          );
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  useEffect(() => {
    getPersonalData();
  }, []);

  return (
    <div className="editUserContainer">
      <TopBar name="Edit User" />
      <div className="editUserContent">
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
            <button className="button" type="submit">
              Adicionar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
