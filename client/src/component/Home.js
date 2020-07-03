import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div className="Myhome">

      <div style={{ height: "75vh" }} className="container valign-wrapper">
        
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Welcome</b> Enter your personal details{" "}
              <span style={{ fontFamily: "monospace" }}>and</span> start or use your account
            </h4>
            <p className="flow-text grey-text text-darken-1">
            Enter your personal details and start or use your account
            </p>
            <br />
            
            <div className="col s6">
              <Link
                to="/login"
                style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    color:"white"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Log In
              </Link>
            </div>
            <Link
                to="/"
                style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    color:"white"

                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Home;