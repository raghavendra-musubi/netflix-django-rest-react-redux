import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

function UserRegistrationSuccess({ history }) {
  return (
    <Fragment>
      <div id="home-container">
        <div id="cover">
          <img id="logo" src="https://i.imgur.com/koU41fn.png" alt="logo" />

          <div id="center" className="container">
            <div className="d-flex flex-column justify-content-center text-light align-items-center align-content-center">
              <i className="fas fa-check-circle fa-10x my-3"></i>
              <p> New User Successfully Registered! </p>
              <button
                className="btn btn-danger my-5"
                onClick={() => history.push("/login-user")}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(UserRegistrationSuccess);
