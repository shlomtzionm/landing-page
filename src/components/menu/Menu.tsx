import { JSX } from "react";

function Menu(): JSX.Element {
  return (
    <div className="menu">
      
      <ul>
        <li>
          <h2>conference rooms</h2>
          <p>rent a conference room for part of the entire day.</p>
        </li>
        <li>
          <h2>desks & day passes</h2>
          <p>access to work on desk or table in spaces communal area(s).</p>
        </li>
        <li>
          <h2>private offices</h2>
          <p>rent office space by the city, day, week, month, or for multiple months in a row.</p>
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default Menu;
