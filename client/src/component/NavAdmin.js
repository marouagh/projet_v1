import React, { Component} from "react";
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthorized, logout } from '../js/actions/actions';
import { clearEmploye} from '../js/actions/employeAction';


class NavAdmin extends Component {

  componentDidMount() {
    this.props.isAuthorized();
  }
      render() {
          
        const { isAuth, profile } = this.props;
      
         console.log(profile)
        return  isAuth ? (
           <Redirect to='/login' />
         ) :

         (
            <div>
                <nav style={{backgroundColor:"#1976d2"}}>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo" style={{marginLeft:"40px", textDecoration:"none"}}>Go-Job</a>
      <ul class="right hide-on-med-and-down">
        
        <li><a  className="waves-effect waves-light btn">welcome <i class="material-icons right">{profile ? `${profile.name}`: ''}</i></a></li>
        <li><a class="waves-effect waves-light btn-large"><Link to="/" onClick={()=>this.props.logout()}>
                        Logout
                      </Link></a></li>
      </ul>
    </div>
  </nav>
    
            </div>
        )
    }
}
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  profile: state.authReducer.profile
});
export default connect(mapStateToProps, { isAuthorized,logout,clearEmploye})( NavAdmin);