import React from "react";
import "../SignUp/SignUp.style.css";
import signup from "../../assets/signup.jpg";
import Navbar from "../../components/layouts/navbar/navbar";
import LognsignForm from "../../components/form/lognsignForms/lognsignForm";

const SignUp = () => {
  return (
    <React.Fragment>
      <Navbar darkText={true} />
      <section className="signup-container">
        <div className="signup-img-container">
          <img src={signup} alt="openbook-signup-bg" />
        </div>
        <div className="signup-content-container">
          <div className="container">
            <div className="content-wrapper">
              <h2>Sign Up</h2>
              <p>Create a new account with email and password.</p>
              <LognsignForm buttonName="Sign Up" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SignUp;
