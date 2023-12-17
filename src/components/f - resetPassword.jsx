import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import BrandLogo from "../media/logoBg.png";

export default function ResetPassword() {

  const navigate = useNavigate();
  

  document.title = "Pomodoro - Reset Password";

  return (
    <Fragment>
      <div className="Login">
        <button className="back" onClick={() => navigate("/")}>
          <i class="bx bx-arrow-back"></i>
        </button>
        <div className="divOfBrand">
          <img src={BrandLogo} className="imgBrandLogin" alt="Brand Logo" />
        </div>
        <h1 className="titleLogIN"> Pomodoro Timer </h1>
        <h5 className="titleLogIN2"> - Reset Password - </h5>
        <div className="divOfForm">
          <form>
            <table></table>
            <div className="formInputes">
              <label className="labelsLogin">Email</label> <br />
              <input
                type="text"
                placeholder="example@mail.com"
                className="inputesLogin"/>
              <br />
              <input
                type="submit"
                value="Send Verification"
                className="btnSubmitLogIn"/>
            </div>
            <br />
          </form>
        </div>
      </div>
    </Fragment>
  );
}
