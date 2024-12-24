import React from "react";
import "../LogIn/LogIn.style.css";
import login from "../../assets/login.jpg";
import Navbar from "../../components/layouts/navbar/navbar";
import LognsignForm from "../../components/form/lognsignForms/lognsignForm";

const LogIn = () => {
  return (
    <React.Fragment>
      <Navbar darkText={true} />
      <section className="signup-container">
        <div className="signup-img-container">
          <img src={login} alt="login-bg" />
        </div>
        <div className="signup-content-container">
          <div className="container">
            <div className="content-wrapper">
              <h2>Log In</h2>
              <p>With email and password.</p>
              <LognsignForm buttonName="Log In" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LogIn;
