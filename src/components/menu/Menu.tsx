import { JSX } from "react";
import "./menu.css";
import waitroom from '../../assets/waitroom-n.svg'
import workspace from '../../assets/workspace-n.svg'
import building from '../../assets/building-n.svg'

function Menu(): JSX.Element {
  return (
    <div className="menu">
      <ul>
        <li>
          <img className="menuImg" src={waitroom}></img>
          <div>
          <h2>conference rooms</h2>
          <p>rent a conference room for part of the entire day.</p>
          </div>
        </li>
        <li>
          <img className="menuImg" src={workspace}></img>
          <div>
          <h2>desks & day passes</h2>
          <p>access to work on desk or table in spaces communal area(s).</p>
          </div>
        </li>

        <li>
          <img className="menuImg" src={building}></img>
          <div>
          <h2>private offices</h2>
          <p>rent office space by the city, day, week, month, or for multiple months in a row.</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
