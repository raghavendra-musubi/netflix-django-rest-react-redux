import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";

function UserRegistration({ history }) {
  const [username, setUsername] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const formSubmit = async (event) => {
    event.preventDefault();

    try {
      const body = { username, email, password };
      const response = await fetch("http://localhost:5000/auth/users/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      //   console.log(response.ok)

      if (response.ok) {
        history.push("/register-user/success");
      } else {
        alert("Operation not successful!, \n (User might already exist)");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <div id="home-container" className="container">
        <img id="logo" src="https://i.imgur.com/koU41fn.png" alt="logo" />
        <div id="cover" className="d-flex flex-column">
          <form
            id="center"
            className="d-flex flex-column"
            onSubmit={formSubmit}
          >
            <input
              className="form-group"
              type="text"
              value={username}
              placeholder="New Username"
              onChange={(event) => setUsername(event.target.value)}
            />

            <input
              className="form-group"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <input
              className="form-group"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <button className="btn btn-danger form-group" type="submit">
              Sign Up
            </button>
            <button
              type="button"
              className="btn btn-danger form-control"
              onClick={() => history.push("/")}
            >
              Back
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(UserRegistration);
