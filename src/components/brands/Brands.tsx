import { JSX } from "react";
import "./brands.css";
import pintrest from "../../assets/pintrest.png";
import nike from "../../assets/nike.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";
function Brands(): JSX.Element {
  return (
    <div className="brands">
      <p>Enabling The Best Brands, Small Businesses and Individuals</p>
      <div className="logos">
        <img src={pintrest}></img>
        <img src={nike}></img>
        <img src={facebook}></img>
        <img src={github}></img>
      </div>
    </div>
  );
}

export default Brands;
