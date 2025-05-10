import { JSX, useState } from "react";
import "./hamburgerIcon.css";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import gsap from "gsap";
gsap.registerPlugin(CSSRulePlugin);

function HamburgerIcon(): JSX.Element {
  const beforeEl = CSSRulePlugin.getRule(".hamburgerIcon .bar:before");
  const afterEl = CSSRulePlugin.getRule(".hamburgerIcon .bar:after");
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    const tl = gsap.timeline({ defaults: { duration: 0.2, ease: "bounce.inOut" } });

    if (isOpen) {
      tl.to(".bar2", {
        opacity: 1,
      },"<").to(".bar1", {
        rotateZ: 0,
        y: 0,
      },"<").to(".bar3",{
        rotateZ:0,
        y:0
      },"<")
    } else {
      tl.to(".bar2", {
        opacity: 0,
      },"<").to(".bar1", {
        rotateZ: 50,
        y: 10,
      },"<").to(".bar3",{
        rotateZ:-50,
        y:-10
      },"<")
    }

    setIsOpen(!isOpen);
  }

  return (
    <div className="hamburgerIcon" onClick={handleClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

export default HamburgerIcon;
