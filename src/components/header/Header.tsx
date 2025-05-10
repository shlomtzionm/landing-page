import { JSX, useRef, useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import "./header.css";
import gsap from "gsap";
import Menu from "../menu/Menu";
import HamburgerIcon from "../hamburgerIcon/HamburgerIcon";

function Header(): JSX.Element {
  const list = useRef<HTMLUListElement | null>(null);
  const types = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      // Lock scroll when the menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll when the menu is closed
      document.body.style.overflow = "auto";
    }

    return () => {
      // Clean up when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  function handleMouseIn() {
    gsap.to(".loginBtn", {
      background: "white",
      border: "1px solid green",
      color: "green",
    });
  }

  function handleMouseOut() {
    gsap.to(".loginBtn", {
      background: "rgb(99, 58, 30)",
      border: "1px solid rgb(99, 58, 30)",
      color: "white",
    });
  }

  function handleClickBars() {
    setIsMenuOpen(!isMenuOpen);
    list.current?.classList.toggle("open");
  }

  function handleTypesClick() {
    types.current?.classList.toggle("open");
  }

  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />
      <ul ref={list} className={`header-menu ${isMenuOpen ? "open" : ""}`}>
        <li className="typesButton" onClick={handleTypesClick}>
          Space Types
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
          <div ref={types} className="menu-component">
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
        <HamburgerIcon />
      </div>
    </div>
  );
}

export default Header;
