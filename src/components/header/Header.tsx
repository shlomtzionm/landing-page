import { JSX, useRef, useState } from "react";
import logo from "../../assets/breather_logo.svg";
import "./header.css";
import gsap from "gsap";
import Menu from "../menu/Menu";

function Header(): JSX.Element {
  const list = useRef<HTMLUListElement | null>(null);
  const types = useRef<HTMLDivElement | null>(null);
  function handleMouseIn() {
    gsap.to(".loginBtn", {
      background: "white",
      border: "1px solid green",
      color: "green",
    });
  }

  function handleMouseOut() {
    gsap.to(".loginBtn", {
      background: " rgb(16, 108, 73)",
      border: "1px solid green",
      color: "white",
    });
  }

  function handleClickBars() {
    list.current?.classList.toggle("open");
  }

  function handleTypesClick() {
    types.current?.classList.toggle("open");
  }
  return (
    <div className="header">
      <img className="logo" src={logo}></img>

      <ul ref={list} className="header-menu">
        <li className="typesButton" onClick={handleTypesClick}>
          Space Types
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
          <div ref={types} className="menu-component open">
            <Menu />
          </div>
        </li>

        <li>Find Spaces</li>
        <li>Pricing</li>
        <li>List Your Space</li>
        <li onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
          <button className="loginBtn">log In</button>
        </li>
      </ul>
      <div onClick={handleClickBars} className="bars-container">
        <span className="material-symbols-outlined hamburger-icon">menu</span>
      </div>
    </div>
  );
}

export default Header;
