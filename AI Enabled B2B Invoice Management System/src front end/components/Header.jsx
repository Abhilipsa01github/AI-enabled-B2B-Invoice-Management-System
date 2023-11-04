import React from "react";
import "../styles/Header.css";
import ABC from "../images/abcproduct.svg";
import SOA from "../images/SOA-PNG.png";

export default function Header() {
  return (
    <header className="header">
      <section className="header-first">
        <a href="/">
          <img src={ABC} alt="ABC-Product-logo" className="logo1" />
        </a>
        <a href="https://www.highradius.com/" target="_blank" rel="noreferrer">
          <img src={SOA} alt="HRC-logo" className="logo2" />
        </a>
      </section>
      <h1 className="grid-heading">Invoice List</h1>
    </header>
  );
}