// Global
import React from "react";
import { useNavigate } from "react-router-dom";

// Styles
import "./styles.css";
// import { IoArrowBack } from "react-icons/io5";
import { AiOutlineLogin } from "react-icons/ai";

export default function TopBar(props) {
  const navigate = useNavigate();
  // const history = useHistory();

  // function backLink() {
  //   navigate.goBack();
  //   // history.goBack();
  //   alert("Voltou");
  // }

  function loggedOut() {
    navigate("/");
    localStorage.setItem("isLogged", false);
  }

  return (
    <div className="TopBarContainer">
      {/* <div className="startTopBar">
        <button onClick={backLink} className="back-link">
          <IoArrowBack size={30} color="black" />
        </button>
      </div> */}
      <div className="centerTopBar">
        <h1 className="titleBar">{props.name}</h1>
      </div>
      <div className="endTopBar">
        <button onClick={loggedOut} className="loggedOutStyle">
          <AiOutlineLogin size={40} color="black" />
        </button>
      </div>
    </div>
  );
}
