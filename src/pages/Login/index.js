// Global
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../../firebaseConfig";

// Styles
import "./styles.css";

export default function Logon() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const db = firebase.firestore();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var userUid = userCredential.user.uid;
        console.log(userUid);
        // localStorage.setItem("userUid", userUid);
        localStorage.setItem("isLogged", true);
        navigate("/home");
        // alert("Usuário logado!");
      })
      .catch((error) => {
        var errorCode = error.code;
        setPassword("");
        var errorMessage = error.message;

        if (
          errorMessage ===
          "The password is invalid or the user does not have a password."
        ) {
          errorMessage =
            "Senha inválida ou o usuário não possui uma senha válida. Contate o administrador!";
        } else if (
          errorMessage ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          errorMessage =
            "Não há registro de usuário correspondente ao email informado. Revise o email, caso esteja correto contate o administrador!";
        } else if (
          errorMessage ===
          "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
        ) {
          errorMessage =
            "Conta temporariamente desabilitada devido a quantidade de tentativas de login. Aguarde alguns instantes e tente novamente!";
        }

        alert(errorMessage);
      });
    // } else {
    //     alert('Insira seu email corporativo')
    // }
  }

  return (
    <div className="container-master">
      <div className="logon-container">
        <section className="form">
          <form onSubmit={handleLogin}>
            {/* <form> */}
            {/* <h1>Faça seu login</h1> */}

            <input
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="button" type="submit">
              Entrar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
