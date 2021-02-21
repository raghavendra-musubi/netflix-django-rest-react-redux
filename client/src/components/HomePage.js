import React, { Fragment } from "react";
import { withRouter } from 'react-router-dom'

function HomePage({history}) {
  return (
    <Fragment>
      <div id="home-container">
        <div id="cover">
          <img id="logo" src="https://i.imgur.com/koU41fn.png" alt="logo" />
          <button id='sign-in-button' className='btn btn-danger' onClick={()=> history.push('/login-user')}> Sign In </button>

          <div id="center" className='container'>
            <div className="d-flex flex-column justify-content-center text-light align-items-center align-content-center">
              <h1>
                Unlimited movies, TV
                <br />
                shows and more.
              </h1>

              <p> Watch anywhere. Cancel anytime.</p>

              <button type="submit" class="btn btn-danger" onClick={() => history.push('/register-user') }>
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(HomePage);
