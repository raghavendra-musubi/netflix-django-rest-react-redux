import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

function UserDashboard({ history }) {
  console.log(sessionStorage.getItem("____"));

  return (
    <Fragment>
      <div id="home-container">
        <div id="cover">
          <img id="logo" src="https://i.imgur.com/koU41fn.png" alt="logo" />
          <button
            id="log-out-button"
            className="btn btn-danger"
            onClick={() => history.push("/logout-user")}
          >
            {" "}
            Sign Out{" "}
          </button>

          <div id="center" className="container"></div>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(UserDashboard);
