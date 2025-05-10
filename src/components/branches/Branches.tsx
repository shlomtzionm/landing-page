import { JSX, useEffect } from "react";
import "./branches.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Branches(): JSX.Element {
  const branches = [
    "AM:PM",
    "Fresh Market",
    "Hatzi Hinam",
    "Mahsanei HaShuk",
    "Osher Ad",
    "Rami Levy Hashikma Marketing",
    "CASTRO",
    "Fox",
    "Adika",
    "Afrodita",
    "Beyt HaSefer",
    "Betili",
    "KSP",
    "Bug",
    "Ivory",
    "IKEA",
    "ACE",
    "Home Center",
    "Azrieli Center",
    "Dizengoff Center",
    "Ramat Aviv Mall",
    "Opera Tower",
    "Hazahav Mall",
    "Ir Yamim Mall",
    "Jerusalem Azrieli Mall",
    "Walmart",
    "Amazon",
    "Costco Wholesale",
    "The Kroger Co.",
    "Target",
    "Home Depot",
    "Best Buy",
    "Walgreens",
    "CVS Health",
    "Lowe's",
    "Marks & Spencer ",
  ];

  useEffect(() => {
    gsap.to(".branchList", {
      y: "-150%", 
      ease: "none",
      scrollTrigger: {
        trigger: ".branches",
        start: "top 80%",
        end: "bottom 10%", 
        scrub: 1, 
      },
    });
  }, []);

  return (
    <div className="branches">
      <div className="ps">
        <p>260 cities,</p>
        <p>22 countries,</p>
        <p>and growing!</p>
      </div>
      <ul className="branchList">
        {branches.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default Branches;
