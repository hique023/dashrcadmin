// Global
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Styles
import "./styles.css";

export default function Logon() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-master">
      <div className="logon-container">
        <section className="form">
          {/* <form onSubmit={handleLogin}> */}
          <form>
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
