import React, { Fragment } from "react";

export default function Page404(){

    document.title = "Pomodoro - NotFound";


    return(
        <Fragment>
            <div className="parentNotfound">
            <h1 className="notFound404">404</h1>
            <span class="loader"></span>
            <h4 className="notFound404text">There isn't a Pomodoro Pages here.</h4>
            </div>
        </Fragment>
    )
}