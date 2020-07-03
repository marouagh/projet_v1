import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthorized, logout } from '../js/actions/actions';
import { clearEmploye} from '../js/actions/employeAction';

class Navbar extends Component {

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
                 <input type="checkbox" id="check"></input>
    <header>
      <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <div class="left_area">
        <h3 style={{marginLeft:"200px"}}>Go-<span>Job</span></h3>
      </div>
     
      <div class="right_area">


      <h6 >{profile ? `Welcome ${profile.name}`: ''}</h6>
        <Link to="/"  class="logout_btn" onClick={()=>this.props.logout()}>
                        Logout
                      </Link>
        
      </div>

    </header>
    <div class="sidebar">
      <center>
       
      <div className="profile_image">{profile ? `${profile.name[0].toUpperCase()}`: ''}</div>  
       
        <h5>{profile ? ` ${profile.name}`: ''}</h5>
        <h6 style={{color:"grey",marginBottom:"50px"}}>{profile ? ` ${profile.email}`: ''}</h6>
        
      </center>
     
      <Link  to="/annonce"><i className="fas fa-table"></i><span>View Job Offers</span></Link>
      <Link to="/profile" ><i class="fas fa-info-circle"></i><span>View profile</span></Link>
      <Link to="#"><i class="fas fa-sliders-h"></i><span>Contact Us</span></Link>
    </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  profile: state.authReducer.profile
});
export default connect(mapStateToProps, { isAuthorized,logout,clearEmploye})( Navbar);