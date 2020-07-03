import React, { Component } from 'react'
import { connect } from 'react-redux';
import Postuler from './postuler'
import {  getAllAnnonces,deleteAnnonce } from '../js/actions/annonceAction';
import {isAuthorized  } from '../js/actions/actions';
import NavAdmin from './NavAdmin';


import moment from 'moment'

import Moment from 'react-moment'
 class annonceProfile extends Component {
   state={
     search:""
   }
   componentDidMount() {
    this.props. getAllAnnonces();
  
  }
   handleChange=(e)=>{
    this.setState({
      search:(e.target.value)
      
  }) 
   }

    render() {

      const an=this.props.annonces.filter((el,i)=>el.name.toUpperCase().includes(this.state.search.toUpperCase().trim()))
      


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
     <div className="content">
     <div className="">
          <div className="list_users">
          {an.map((el,i)=>(
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
                            <h4>Poste Reference: {el.ref}</h4>
                          </li>
                          <li class="collection-item">
                          <strong>Poste Title:</strong> {el.name.toUpperCase()}
                          </li>
                          <li class="collection-item">
                          <strong>Poste Description:</strong> {el.description}
                          </li>
                          <li class="collection-item"><strong>Date:</strong> {el.date}</li>
                          <li class="collection-item"><strong>Poste Deadline:</strong> {el.deadline}</li>
                          <li class="collection-item"><strong>Email:</strong> {el.email}</li>
                          <li class="collection-item"><strong>Phone:</strong> {el.telephone}</li>

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
                        onClick={()=>this.props.deleteAnnonce(el._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div></div></div> 
        )
    }
}
     const mapStateToProps = state => ({
 isAuth: state.authReducer.isAuth,
profile: state.authReducer.profile,
annonces:state.annonceReducer.annonces
 });
 export default connect(mapStateToProps, {  getAllAnnonces ,isAuthorized,deleteAnnonce })( annonceProfile
  );
 
