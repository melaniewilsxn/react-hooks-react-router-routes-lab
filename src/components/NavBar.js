import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const linkStyles = {
    display: "inline-block",
    width: "60px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#FFDDD2",
    textDecoration: "none",
    color: "white",
    textAlign: "center",
  };

  return (
    <div className="navbar">
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "#CF5C36"}}>Home</NavLink>
      <NavLink to="/movies" exact style={linkStyles} activeStyle={{background: "#CF5C36"}}>Movies</NavLink>
      <NavLink to="/directors" exact style={linkStyles} activeStyle={{background: "#CF5C36"}}>Directors</NavLink>
      <NavLink to="/actors" exact style={linkStyles} activeStyle={{background: "#CF5C36"}}>Actors</NavLink>
    </div>
  )
}

export default NavBar;
