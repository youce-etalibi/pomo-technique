import React, { Fragment, createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import BrandLogo from "../media/logoBg.png";
import { AUTH, ChangeMode, UpdateSettings } from "./Redux/Action";

    //cree Context
  const defaultValue = "natural";
  const Appcontext = createContext(defaultValue);
  export { Appcontext };


export default function Header({ Switcher, onSwitch }) {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const [loginCorrect, setUsersInCorrect] = useState(users.loginCorrect);
  const settings = useSelector((state) => state.settings);

  const [silverMode, setSilverMode] = useState();

  //cree variable et les function Opppening Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //cree les variable de parametrage pomodoro
  const [pomodoro, setPomodoro] = useState(settings.pomodoro);
  const [shortBreak, setShortBreak] = useState(settings.shortBreak);
  const [longBreak, setLongBreak] = useState(settings.longBreak);
  const [autoStartPomodoro, setAutoStartPomodoro] = useState(false);
  const [autoStartShortBreak, setAutoStartShortBreak] = useState(false);
  const [longBreakInterval, setLongBreakInterval] = useState(settings.longBreakInterval);


  //cree la funtion de changement de settings pomodoro
  function handleSettings(e) {
    e.preventDefault();
    const newSettings = {
      pomodoro: +pomodoro,
      shortBreak: +shortBreak,
      longBreak: +longBreak,
      autoStartPomodoro: autoStartPomodoro,
      autoStartShortBreak: autoStartShortBreak,
      longBreakInterval: longBreakInterval,
    };
    dispatch(UpdateSettings(newSettings), ChangeMode(silverMode));
    closeModal();
  }


  //cree variable de rankApi data et fetch 
  const [rankApi, setRankApi] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/a00d524f-a0b8-4460-b6a2-c27e59dc64f9")
      .then((repo) => repo.json())
      .then((data) => setRankApi(data));
  }, []);


  // cree variable toggle et function pour affiche le rank
  const [showRankToggle, setShowRankToggle] = useState(true);
  function ShowRank() {
    if (showRankToggle) {
      return (
        <div>
          <table className="tableRank" cellSpacing="6">
            <caption
              style={{ fontWeight: "bold", textAlign: "center", marginLeft: "10px",}}> Focus Time This Week
            </caption>
            <thead>
              <tr>
                <th className="thRank">Place</th>
                <th className="thRank">Profile</th>
                <th className="thRank">User</th>
                <th className="thRank">(HH:MM)</th>
              </tr>
            </thead>
            <tbody>
              {/* map rank*/}
              {rankApi.sort((a, b) => b.time - a.time).map((item, index) => (
                <tr key={item.id} className="trRank">
                  <td className="tdRank">{++index}</td>
                  <td className="tdRankImg">
                    <img src={BrandLogo} style={{ width: "30px", borderRadius: "50%" }} />
                  </td>
                  <td className="tdRank">{item.user}</td>
                  <td className="tdRank">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }


  //cree varibale toggle et function pour le modal de rank
  const [isModalOpenRanking, setIsModalOpenRanking] = useState(false);

  const openModalRanking = () => { setIsModalOpenRanking(true); };
  const closeModalRanking = () => { setIsModalOpenRanking(false); };


  //cree function pour change le textContent de button login 
  const handleButtonClick = () => {
    if (loginCorrect) {
      dispatch(AUTH(false))
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
    <Fragment>
      <Appcontext.Provider value={silverMode}>

        {/* header composant */}
        <div className="parentHeader">
          <div className="header">
            <Link to="/">
              <img src={BrandLogo} className="BrandLogo" alt="Brand Logo" />
            </Link>
            <ul className="listLinks">
              <li>
                <Link to="/">
                  <button className="Link" onClick={openModalRanking}>
                    <i className="bx bxs-report"></i> Rank
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button className="Link" onClick={openModal}>
                    <i className="bx bxs-cog"></i> Setting
                  </button>
                </Link>
              </li>
              <li>
                <Link to={loginCorrect ? "/" : "/login"}>
                  <button className="Link" onClick={handleButtonClick}>
                    {loginCorrect ? (
                      <Fragement>
                        <i
                          class="bx bxs-user-check"
                          style={{ fontSize: "20px" }}
                        ></i>
                        <i
                          class="bx bx-log-out"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </Fragement>
                    ) : (
                      <>
                        <i className="bx bx-user"></i> Login
                      </>
                    )}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal de Setting */}
        <Modal
          id="Modal"
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="custom-modal"
          overlayClassName="custom-modal-overlay">

          <div className="DivOFModal">
            <div className="headerModal">
              <button onClick={closeModal} className="backToHome">
                <i class="bx bx-x-circle"></i>
              </button>
              <h2>Setting</h2>
            </div>
            <h3><i class="bx bx-time"></i> Timer</h3>
            <h5>Time (minutes) </h5>

            <form onSubmit={handleSettings}>
              <table className="tableSettings">
                <tr>
                  <td style={{ width: "47%" }} colSpan="3">
                    <div
                      style={{ borderBottom: "3px solid red", fontWeight: "bold", borderRadius: "5px",}} ></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Pomodoro : <br />
                    <input
                      type="number"
                      className="inputesSettings"
                      onChange={(e) => setPomodoro(e.target.value)}
                      value={pomodoro}
                    />
                  </td>
                  <td>
                    Short Break : <br />
                    <input
                      type="number"
                      className="inputesSettings"
                      onChange={(e) => setShortBreak(e.target.value)}
                      value={shortBreak}
                    />
                  </td>
                  <td>
                    Long Break : <br />
                    <input
                      type="number"
                      className="inputesSettings"
                      onChange={(e) => setLongBreak(e.target.value)}
                      value={longBreak}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">Auto Start Breaks</td>
                  <td>
                    <input
                      type="checkbox"
                      className="checkBoxTask"
                      onChange={(e) =>
                        setAutoStartShortBreak(!autoStartShortBreak)
                      }
                      checked={autoStartShortBreak ? true : false}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">Auto Start Pomodoros</td>
                  <td>
                    <input
                      type="checkbox"
                      className="checkBoxTask"
                      onChange={(e) => setAutoStartPomodoro(!autoStartPomodoro)}
                      checked={autoStartPomodoro ? true : false}/>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">Long Break Interval</td>
                  <td>
                    <input
                      type="number"
                      className="inputesSettings"
                      onChange={(e) => setLongBreakInterval(e.target.value)}
                      value={longBreakInterval}/>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "47%" }} colSpan="3">
                    <div
                      style={{
                        borderBottom: "3px solid red",
                        fontWeight: "bold",
                        borderRadius: "5px",
                      }}></div>
                  </td>
                </tr>
                <h3>
                  <i class="bx bxs-magic-wand"></i> Theme
                </h3>
                <tr>
                  <td colSpan="2">Color Theme</td>
                  <td>
                    <input
                      type="radio"
                      className="checkBoxTaskModeN"
                      name="Mode"
                      value="natural"
                      onChange={(e) => {
                        Switcher(e.target.value);
                        onSwitch(e.target.value);
                      }}
                      checked/>
                    <input
                      type="radio"
                      className="checkBoxTaskModeS"
                      name="Mode"
                      value="silver"
                      onChange={(e) => {
                        Switcher(e.target.value);
                        onSwitch(e.target.value);}}/>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">Alarm</td>
                  <td>
                    <input
                      type="file"
                      className="inputesSettings"
                      style={{ display: "none" }}
                      onChange={(e) => setAlarmX(e.target.files[0])}/>
                    <input
                      type="button"
                      className="inputesSettingsFile"
                      value="+Choose File"/>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "47%" }} colSpan="3">
                    <div
                      style={{ borderBottom: "3px solid red", fontWeight: "bold", borderRadius: "5px", }} ></div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td colSpan="3" className="tdOfOk">
                    <input type="submit" value="OK" className="btnOk" />
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </Modal>
        <Modal
          id="Modal"
          isOpen={isModalOpenRanking}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="custom-modal"
          overlayClassName="custom-modal-overlay">
          <div className="ModalReport">
            <button onClick={closeModalRanking} className="backToHome">
              <i class="bx bx-x-circle"></i>
            </button>
            <br />
            <button className="btnHeaderModalReport">Ranking</button>
            {ShowRank()}
          </div>
        </Modal>
      </Appcontext.Provider>
    </Fragment>
  );
}
