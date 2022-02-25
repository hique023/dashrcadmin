// Global
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar";
import User from "../../components/User";
import firebase from "../../firebaseConfig.js";

// Styles
import "./styles.css";

export default function Home() {
  const [user, setUser] = useState({ data: [] });
  // const [uid, setUid] = useState(localStorage.getItem("userUid"));
  // const [uidDb, setUidDb] = useState();

  const db = firebase.firestore();
  const navigate = useNavigate();

  const isLogged = localStorage.getItem("isLogged");

  function addUser(e) {
    e.preventDefault();
    navigate("/adduser");
  }

  function loginValidator() {
    // console.log(isLogged);
    // console.log(typeof isLogged);
    // console.log("Tipo de uid: " + typeof uid);
    // console.log("Conteúdo de uid: " + uid);
    // console.log("Tipo de uidDb: " + typeof uidDb);
    // console.log("Conteúdo de uidDb: " + uidDb);

    if (isLogged === "true") {
      getUser();
    } else {
      alert(
        "Houve um problema em sua autenticação, por gentileza realize seu login novamente!"
      );
      navigate("/");
    }
  }

  // function getUid() {
  //   var docRef = db.collection("uid").doc(uid);

  //   docRef
  //     .get()
  //     .then((doc) => {
  //       if (doc.exists) {
  //         const data = doc.data();
  //         setUidDb(data.uid);
  //       } else {
  //         alert(
  //           "Falha ao carregar dados do analista, reinicia a página e tente novamente!"
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error getting document:", error);
  //     });
  // }

  function getUser() {
    const count = [];

    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          count.push(doc.data());
        });

        count.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          } else {
            return true;
          }
        });

        setUser({ data: count });
      });
  }

  useEffect(() => {
    // getUid();
    loginValidator();
  }, []);

  return (
    <div className="homeContainer">
      <TopBar name="Home" back="false" />
      <form onSubmit={addUser}>
        <button className="button" type="submit">
          Adicionar Usuário
        </button>
      </form>
      <div className="homeContent">
        {user.data.map((item, key) => (
          <div key={key}>
            <User
              name={item.name}
              email={item.email}
              active={item.active}
              getUsers={getUser}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
