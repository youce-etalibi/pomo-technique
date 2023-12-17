import React, { Fragment } from "react";
export default function Documentation() {
  return (
    <Fragment>
      <br />
      <div className="DocuDiv">
        <h1>An online Pomodoro Timer to boost your productivity</h1>
        <h3>
          <i class="bx bxs-cube-alt"></i> What is Pomofocus?
        </h3>
        <p>
          Pomofocus is a customizable pomodoro timer that works on desktop &
          mobile browser. The aim of this app is to help you focus on any task
          you are working on, such as study, writing, or coding. This app is
          inspired by
          <a href="https://pomofocus.io/" className="linksDocu" target="_blank"> pomodoro.io </a>
          which is a time management method developed by Francesco Cirillo.
        </p>
        <h3><i class="bx bxs-cube-alt"></i> What is Pomodoro Technique?</h3>
        <p>
          The Pomodoro Technique is created by Francesco Cirillo for a more
          productive way to work and study. The technique uses a timer to break
          down work into intervals, traditionally 25 minutes in length,
          separated by short breaks. Each interval is known as a pomodoro, from
          the Italian word for 'tomato', after the tomato-shaped kitchen timer
          that Cirillo used as a university student. -
          <a href="Wikipedia" className="linksDocu" target="_blank">
            Wikipedia
          </a>
        </p>
        <h3>
          <i class="bx bxs-cube-alt"></i> How to use the Pomodoro Timer?
        </h3>
        <ul>
          <li>
            <h5>Add tasks to work on today</h5>
          </li>
          <li>
            <h5>Set estimate pomodoros (1 = 25min of work) for each tasks</h5>
          </li>
          <li>
            <h5>Select a task to work on</h5>
          </li>
          <li>
            <h5>Start timer and focus on the task for 25 minutes</h5>
          </li>
          <li>
            <h5>Take a break for 5 minutes when the alarm ring</h5>
          </li>
          <li>
            <h5>Iterate 3-5 until you finish the tasks</h5>
          </li>
        </ul>
        <h3>
          <i class="bx bxs-cube-alt"></i> Basic Features
        </h3>
        <ul>
          <li>
            <h5>
              
              Estimate Finish Time: Get an estimate of the time required to
              complete your daily tasks.
            </h5>
          </li>
          <li>
            <h5>
              Custom Settings: Personalize your focus/break time, alarm sounds,
              background sounds, and more.
            </h5>
          </li>
        </ul>
        <br />
        <div className="signature">
          <h2>Youssef Talibi</h2>
          <div className="linksOfSignateur">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/youssef-talibi-b0a0b8238/"
            >
              <i class="bx bxl-linkedin-square"></i>
            </a>
            <a target="_blank" href="mailto:youssef.talibi11@gmail.com">
              <i class="bx bxs-envelope"></i>
            </a>
          </div>
        </div>
        <br />
      </div>
    </Fragment>
  );
}
