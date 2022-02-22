// Global
import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// Styles
import "./styles.css";
import { IoArrowBack } from "react-icons/io5";

export default function TopBar(props) {
  // const navigate = useNavigate();
  // const history = useHistory();

  // function backLink() {
  //   navigate.goBack();
  //   // history.goBack();
  // }

  return (
    <div className="TopBarContainer">
      {/* <button onClick={backLink} className="back-link">
        <IoArrowBack size={30} color="black" />
      </button> */}
      <h1>{props.name}</h1>
    </div>
  );
}
