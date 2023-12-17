import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../media/logoBg.png";

import { ADD_ACCOUNT } from "./Redux/Action";


export default function Signup() {

  //cree function de navigate et dispatch et select user 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const id = users.length > 0 ? users.slice(-1)[0].id + 1 : 0;

  //cree variables de form
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUserName] = useState();

  //cree function de ajoute user
  function handleSubmit(e) {
    e.preventDefault();
    const userX = {id: id, userName: username, email: email, password: password, TotalTime: "0",};
    dispatch(ADD_ACCOUNT(userX));
    navigate("/");
  }

  document.title = "Pomodoro - Signup";

  return (
    <Fragment>
      <div className="Signup">
        <button className="back" onClick={() => navigate("/")}>
          <i class="bx bx-arrow-back"></i>
        </button>
        <div className="divOfBrand">
          <img src={BrandLogo} className="imgBrandLogin" />
        </div>
        <h1 className="titleSignIn"> Pomodoro Timer </h1>
        <h5 className="titleSignIn2"> Create Account </h5>
        <div>
          <div className="divOfFormCA">
            <form onSubmit={handleSubmit}>
              <span className="spanOfGoogleCA">
                <i class="bx bxl-google" style={{ fontSize: "17px" }}></i>
                <Link to="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Ftakeout.google.com%2F%3Fhl%3Dfr&ec=GAlAwAE&hl=fr&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1074604875%3A1701376962686775&theme=glif">
                  <input type="button" value="Login with Google" className="inputGoogle"/>
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
                    style={{ verticalAlign: "middle", textAlign: "center", color: "white",}}>or
                  </td>
                  <td style={{ width: "47%" }}>
                    <div
                      style={{ borderBottom: "2px solid white", fontWeight: "bold", }} ></div>
                  </td>
                </tr>
              </table>
              <div className="formInputes">
                <label className="labelsLoginCA">Email</label> <br />
                <input
                  type="text"
                  placeholder="example@mail.com"
                  className="inputesLoginCA"
                  onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label className="labelsLoginCA">User-Name</label> <br />
                <input
                  type="text"
                  placeholder="example_123"
                  className="inputesLoginCA"
                  onChange={(e) => setUserName(e.target.value)} />
                <br />
                <label className="labelsLoginCA">Password</label> <br />
                <input
                  type="password"
                  placeholder="..."
                  className="inputesLoginCA"
                  onChange={(e) => setPassword(e.target.value)} />
                <br />
                <input
                  type="submit"
                  value="Log in with Email"
                  className="btnSubmitLogInCA" />
              </div>
              <br />
              <div
                style={{ display: "flex", justifyContent: "center", position: "relative", bottom: "15px",}}>
                <Link to="/reset-password">
                  <button className="forgotPassword">Forgot Password</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="divOfCreateAccount">
          <h5>Already have an account ?</h5>
          <Link to="/login">
            <button className="btnCreateAcc">Login</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
