import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../media/logoBg.png";

import { AUTH, FetchUsers, login } from "./Redux/Action";


export default function Login() {

  //cree function navigate et dispatch et select users
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  //cree variables de form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //fetch data users api
  // console.log(users)
  // useEffect(() => {
  //   fetch("http://localhost:4000/users")
  //     .then((Response) => Response.json())
  //     .then((data) => dispatch(FetchUsers(data)));
  // }, []);


  //cree function de login
  function handleSubmit(e) {
    e.preventDefault();
    const userIndex = users.findIndex(
      (el) => el.email === email && el.password === password
    );
    if (userIndex !== -1) {
      const authenticatedUser = users[userIndex];
      dispatch(login(authenticatedUser));
      dispatch(AUTH(true));
      navigate("/");
    } else {
      setError("Email ou mot de pass incorrect");
    }
  }

  document.title = "Pomodoro - Login";

  return (
    <Fragment>
      <div className="bodyOfLogin">
        <div className="Login">
          <button
            className="back"
            onClick={() => {
              navigate("/");}}>
            <i class="bx bx-arrow-back"></i>
          </button>
          <div className="divOfBrand">
            <img src={BrandLogo} className="imgBrandLogin" alt="Brand Logo" />
          </div>
          <h1 className="titleLogIN"> Pomodoro Timer </h1>
          <h5 className="titleLogIN2"> Login </h5>
          <div className="divOfForm">
            <form onSubmit={handleSubmit}>
              <span className="spanOfGoogle">
                <i class="bx bxl-google" style={{ fontSize: "17px" }}></i>
                <Link to="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Ftakeout.google.com%2F%3Fhl%3Dfr&ec=GAlAwAE&hl=fr&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1074604875%3A1701376962686775&theme=glif">
                  <input
                    type="button"
                    value="Login with Google"
                    className="inputGoogle"/>
                  <br />
                </Link>
              </span>
              <table>
                <tr>
                  <td style={{ width: "47%" }}>
                    <div
                      style={{ borderBottom: "2px solid white", fontWeight: "bold", }}></div>
                  </td>
                  <td
                    style={{ verticalAlign: "middle", textAlign: "center", color: "white", }}>or</td>
                  <td style={{ width: "47%" }}>
                    <div
                      style={{ borderBottom: "2px solid white", fontWeight: "bold", }}></div>
                  </td>
                </tr>
              </table>
              <div className="formInputes">
                <label className="labelsLogin">Email</label> <br />
                <input
                  type="text"
                  placeholder="example@mail.com"
                  className="inputesLogin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                <br />
                <label className="labelsLogin">Password</label> <br />
                <input
                  type="password"
                  placeholder="..."
                  className="inputesLogin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                <br />
                {error ? (
                  <h1
                    style={{
                      textAlign: "center",
                      fontSize: "10px",
                      marginInline: "auto",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "7px",
                    }}>
                    {error}
                  </h1>
                ) : null}
                <input
                  type="submit"
                  value="Log in with Email"
                  className="btnSubmitLogIn"/>
              </div>
              <br />
              <div
                style={{ display: "flex", justifyContent: "center", position: "relative", bottom: "15px",}} >
                <Link to="/reset-password">
                  <button className="forgotPassword">Forgot Password</button>
                </Link>
              </div>
            </form>
          </div>
          <div className="divOfCreateAccount">
            <h5>Do not Have an Account ?</h5>
            <Link to="/signup">
              <button className="btnCreateAcc">Create Account</button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
