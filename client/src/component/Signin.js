import React, { Component } from "react";
import { login } from "../js/actions/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };
  changeHandle = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  };
  render() {

    return this.props.isLoading ? (
      <h1>wait...</h1>
    ) : localStorage.getItem("token") ? (
      
      <Redirect to="/adminPage" />
    ) : (
<div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/home" className="btn-flat waves-effect">
              <i className="material-icons left"></i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/">Register</Link>
              </p>
            </div>
            <form>
              <div className="input-field col s7">
              <input
              type="email"
              id="email"
              value={this.state.email}
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              onChange={this.changeHandle}
            />
                <label htmlFor="email">Email</label>
                
              </div>
              <div className="input-field col s7">
              <input
              type="password"
              id="password"

              value={this.state.password}
              className="form-control"
              name="password"
              onChange={this.changeHandle}
            />
                <label htmlFor="password">Password</label>
                
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    color:"white"
                  }}
                  type="submit"
                  onClick={this.handleSubmit}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


      // <div>
      //   <form>
      //     <div className="form-group col-md-4">
      //       <label htmlFor="exampleInputEmail1">Email address</label>
      //       <input
      //         type="email"
      //         className="form-control"
      //         name="email"
      //         aria-describedby="emailHelp"
      //         onChange={this.changeHandle}
      //       />
      //     </div>
      //     <div className="form-group col-md-4">
      //       <label htmlFor="exampleInputPassword1">Password</label>
      //       <input
      //         type="password"
      //         className="form-control"
      //         name="password"
      //         onChange={this.changeHandle}
      //       />
      //     </div>

      //     <button
      //       type="submit"
      //       className="btn btn-primary"
      //       onClick={this.handleSubmit}
      //     >
      //       Submit
      //     </button>
      //   </form>
      // </div>
    );
  }
}
const msp = (state) => ({
  isLoading: state.authReducer.isLoading,
  
});
export default connect(msp, { login })(Signin);
