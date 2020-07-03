import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {register} from '../js/actions/actions'
import {connect} from 'react-redux'

class Signup extends Component {

    state = {
        name:'',
        email:'',
        password:''
    }
    changeHandle = (event) =>{
        this.setState({        
          [event.target.name]:event.target.value
        })
    }
    handleSubmit = (event) =>{
      if(this.state.name){
        event.preventDefault()
        this.props.register(this.state)
      } else {
        alert('all fields required')
      }
   
        
    }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/home" className="btn-flat waves-effect">
              <i className="material-icons left"></i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form>
              <div className="input-field col s7">
                <input
                  value={this.state.name}
                  id="name"
                  type="text"
                  name="name"
                  onChange={this.changeHandle}
                  aria-describedby="emailHelp"
                />
                <label htmlFor="name">Name</label>
              </div>


              <div className="input-field col s7">
                <input
                  value={this.state.email}
                  id="email"
                  type="email"
                  name="email"
                  aria-describedby="emailHelp"
                  onChange={this.changeHandle}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s7">
                <input
                  value={this.state.password}
                  id="password"
                  type="password"
                  name="password"
                  onChange={this.changeHandle}


                  
                />
                <label htmlFor="password">Password</label>
              </div>
             
              <div className="col s7" style={{ paddingLeft: "11.250px" }}>
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
                  
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>





      // <div>
      //   <div>{this.props.register.error}</div>
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
      //       <label htmlFor="name">Name</label>
      //       <input
      //         type="text"
      //         className="form-control"
      //         name="name"
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
         
      //     <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
      //       Submit
      //     </button>
      //   </form>
      //   <span>
      //     Having an account?<Link to='/login'>login</Link>
      //   </span>
        
      // </div>
    );
  }  
}

export default connect (null,{
  register  
})(Signup);
