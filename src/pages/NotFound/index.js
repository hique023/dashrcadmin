// Global
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// styles
import "./styles.css";

export default function NotFound() {
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();

  setTimeout(function () {
    if (sec > 0) {
      setSec(sec - 1);
    } else {
      navigate("/home");
    }
  }, 1000);

  return (
    <div className="containerNotfound">
      <div className="contentNotfound">
        <h1>Ops!</h1>
        <h2>Página não encontrada</h2>
        <h3>
          Você será direcionado para a página principal em {sec} segundos...
        </h3>
      </div>
    </div>
  );
}
