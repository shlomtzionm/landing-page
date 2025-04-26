import { JSX, useRef, useState } from "react";
import logo from "../../assets/breather_logo.svg";
import "./header.css";
import gsap from "gsap"

function Header(): JSX.Element {
const list = useRef<HTMLUListElement| null>(null)
    function handleMouseIn(){
        gsap.to(".loginBtn",{
            background:'white',
            border:'1px solid green',
            color:'green'
        })
    }

    function handleMouseOut(){
        gsap.to(".loginBtn",{
            background:' rgb(16, 108, 73)',
            border:'1px solid green',
            color:'white'
        })

    }

    
    function handleClickBars(){
      list.current?.classList.toggle("open")
              }
  return (
    <div className="header">
      <img src={logo}></img>
      
      <ul ref={list} className="desktop-menu open">
        <li>Space Types
        <span className="material-symbols-outlined">
keyboard_arrow_down
</span>
        </li>
        <li>Find Spaces</li>
        <li>Pricing</li>
        <li>List Your Space</li>
        <li onMouseEnter={handleMouseIn} 
        onMouseLeave={handleMouseOut}>
            <button className="loginBtn" >log In</button></li>
      </ul>
      <div  onClick={handleClickBars} className="bars-container">
      <span className="material-symbols-outlined hamburger-icon">
menu
</span>
      </div>
    </div>
  );
}

export default Header;
