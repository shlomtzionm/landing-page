import { JSX } from "react";
import "./info.css"
import locationImg from "../../assets/location.webp"
function Info ():JSX.Element{
    return(<div className="info">
        <h2>where to find us</h2>
        <img src={locationImg}></img>
    </div>)
}

export default Info