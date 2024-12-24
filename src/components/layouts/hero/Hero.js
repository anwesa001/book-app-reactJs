import React from "react";
import "./hero.styles.css";
import Navbar from "../navbar/navbar";
import SearchInputForm from "../../form/searchinputform/searchinputform";

const Hero = () => {
  return (
    <section className="hero-container">
      <Navbar darkTheme={false} />

      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          Find your next <span className="text-primary">escape,</span>
        </h1>
        <p className="hero-p">one book at a time !</p>
        <SearchInputForm darkTheme={true} />
      </div>
    </section>
  );
};

export default Hero;
