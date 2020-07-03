import React from "react";
import { connect } from "react-redux";
import NavAdmin from "./NavAdmin";
import { Link } from "react-router-dom";
import Footer from "./layout/footer";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class adminPage extends React.Component {
  render() {
    const { profile } = this.props;

    return (
      <div>
        <NavAdmin />
        <div className="row" style={{marginRight:"200px"}}>
          <div className="col s12 center-align">
            <h4 style={{
                    marginTop:"300px",
                    textAlign:"center"

                }}>
              <b>Welcome</b> click the button {" "}
              <span style={{ fontFamily: "monospace" }}>to</span> delete user or offer
            </h4>
            <p className="flow-text grey-text text-darken-1">
            Enter your personal details and start or use your account
            </p>
            <br />
            
            <div className="col s6">
              <Link
                to="/adminUsers"
                style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    color:"white",
                    backgroundColor: "#26a69a"
                }}
                className="btn btn-large waves-effect waves-light hoverable accent-3"
              >
                Get All Users
              </Link>
            </div>
            <Link
                to="/adminAnnonces"
                style={{
                    width: "170px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    paddinTop: "10px",
                    color:"white",
                    backgroundColor: "#26a69a"

                }}
                className="btn btn-large waves-effect waves-light hoverable accent-3"
              >
                Get All offers
              </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  profile: state.authReducer.profile,
  employe: state.employeReducer.employe,
});
export default connect(mapStateToProps)(adminPage);
