import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";

function UserLogin({ history }) {
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const formSubmit = async (event) => {
    event.preventDefault();

    try {
      const body = { username, password };
      const response = await fetch("http://127.0.0.1:5000/auth/token/login/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const { auth_token } = await response.json();
        sessionStorage.setItem("____", auth_token);
        history.push("/user-dashboard");
      } else {
        alert("Login not successful!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <div id="home-container" className="container">
        <img id="logo" src="https://i.imgur.com/koU41fn.png" alt="logo" />
        <div id="cover">
          <form
            id="center"
            className="d-flex flex-column"
            onSubmit={formSubmit}
          >
            <input
              className="form-group"
              type="text"
              value={username}
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />

            <input
              className="form-group"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <button className="btn btn-danger form-group" type="submit">
              Log In
            </button>
            <button className="btn btn-danger form-group" type="button" onClick={() => history.push("/")}>
              {" "}
              Back{" "}
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(UserLogin);
