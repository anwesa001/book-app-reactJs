import React from "react";
import "./footer.style.css";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="container">
        <h2>Got queries? Reach out to us anytime!</h2>

        <form className="footer-form">
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Enter your Name"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your Email"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="query">
              Queries:
            </label>
            <textarea
              className="form-input"
              id="query"
              placeholder="Type your Query"
            />
          </div>

          <div className="form-group">
            <a href="#" className="form-submit">
              Submit
            </a>
          </div>
        </form>

        <p>&copy; 2024 BookNook. All Rights Reserved. </p>
      </div>
    </section>
  );
};

export default Footer;
