import React from "react";

const LognsignForm = ({ buttonName }) => {
  return (
    <form>
      <div className="form-group">
        <label className="form-label-two">Email</label>
        <input
          type="email"
          className="form-input-two"
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label className="form-label-two">Password</label>
        <input
          type="password"
          className="form-input-two"
          placeholder="Enter your password"
        />
      </div>

      <div className="form-group">
        <input type="submit" className="btn-primary" value={buttonName} />
      </div>
    </form>
  );
};

export default LognsignForm;
