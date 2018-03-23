import React from "react";

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#education">
          Education
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#internship">
          Internship
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#research">
          Research
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#activities">
          Activities
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#skills">
          Skills
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
