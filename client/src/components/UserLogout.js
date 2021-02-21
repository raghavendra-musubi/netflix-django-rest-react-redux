import React, { Fragment }from "react";
import { withRouter } from "react-router-dom";

function UserLogout({history}) {

    sessionStorage.removeItem('____')

  return (
    <Fragment>
      <div id="home-container">
        <div id="cover">
          <img id="logo" src="https://i.imgur.com/koU41fn.png" alt="logo" />

          <div id="center" className="container">
            <div className="d-flex flex-column justify-content-center text-light align-items-center align-content-center">
              <i className="fas fa-check-circle fa-10x my-3"></i>
              <p> Logout Successful </p>
              <button
                className="btn btn-danger my-3"
                onClick={() => history.push("/login-user")}
              >
                Sign In Again
              </button>
              <button
                className="btn btn-danger my-3"
                onClick={() => history.push("/")}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(UserLogout);
