import React, { Component } from "react";
import { connect } from "react-redux";
import { isAuthorized, getAllUsers, deleteUsers } from "../js/actions/actions";
import NavAdmin from "./NavAdmin";

class annonceProfile extends Component {
  state = {
    search: "",
  };
  componentDidMount() {
    this.props.getAllUsers();
  }
  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const user = this.props.profiles.filter((el, i) =>
      el.name.toUpperCase().includes(this.state.search.toUpperCase().trim())
    );

    return (
      <div>
        <NavAdmin />
        {/* search */}
        
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          
          <input id="search" type="search" type="text"
              name="search"
              placeholder="recherche..."
              className="form-control col-md-4"
              value={this.state.search}
              onChange={this.handleChange}/>
        </div>
      </form>
    </div>
  

        <div className="">
          <div className="list_users">
            {user.map((el, i) => (
              <div class="row">
                <div class="col s12 m7">
                  <div class="card">
                    <div class="card-image">
                      <img
                        className="user"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg"
                        alt=""
                      />
                      <span class="card-title">{`User${i + 1}`}</span>
                    </div>
                    <div class="card-content">
                      <p>
                        <ul class="collection with-header">
                          <li class="collection-header">
                            <h4>Poste Reference: {i + 1}</h4>
                          </li>
                          <li class="collection-item">
                            <strong>Poste Title:</strong> {el.name.toUpperCase()}
                          </li>
                          <li class="collection-item">
                          <strong>Email:</strong> {el.email}
                          </li>
                          <li class="collection-item">Alvin</li>
                        </ul>
                      </p>
                    </div>
                    <div class="card-action">
                      <button
                        to="/adminAnnonces"
                        style={{
                          width: "170px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem",
                          paddinTop: "10px",
                          color: "white",
                          backgroundColor: "#26a69a",
                          display: "block",
                          margin : "auto"
                          
                        }}
                        className="btn btn-large waves-effect waves-light hoverable accent-3"
                        onClick={() => this.props.deleteUsers(el._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  profiles: state.authReducer.profiles,
});
export default connect(mapStateToProps, {
  getAllUsers,
  isAuthorized,
  deleteUsers,
})(annonceProfile);
