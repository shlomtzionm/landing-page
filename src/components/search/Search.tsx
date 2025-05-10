import { JSX } from "react";
import "./search.css";
import studyImg from "../../assets/study.jpg";

function Search(): JSX.Element {
  return (
    <div className="search">
      <img src={studyImg} className="studyImg"></img>
      <input placeholder="Search by field or interest." type="text" className="searchBar"></input>
      <div className="text">
        <h3>Browse and access information instantly</h3>
        <p>Explore 100+ learning opportunities with a flexible schedule, expert-led courses, interactive content, and personalized learning paths.</p>
      </div>
    </div>
  );
}

export default Search;
