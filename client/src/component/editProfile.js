import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { createProfile,getcurrentEmploye } from '../js/actions/employeAction';

import { connect } from 'react-redux'
import Footer from './layout/footer'
import Nav from './Navbar';


 class create extends Component {

constructor(props){
    super(props);
    this.state={
        status:'',
        skills:'',
        bio:'',
        errors:{}
    }
}

componentWillMount(){
this.props.getcurrentEmploye()&&
this.setState({
    skills: this.props.employe.skills.join(','),
    bio: this.props.employe.bio,
    status: this.props.employe.status,
    
  });
}
componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({
            errors:nextProps.errors
        })

    }
}

onSubmit=(e)=>{
    e.preventDefault();
   const profileData={
       status:this.state.status,
       skills:this.state.skills,
       bio: this.state.bio
   } 
   this.props.createProfile(profileData,this.props.history)
}
addEmploye=()=>{

}
  
handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}


    render() {
        return (
            <div>
                <Nav/>
                <div className="content"> 
               <div className="container">
                   <div className="row">
                       <div className="col-md-8 m-auto">
                           <h1 className="display-4 text-center">Edit Your Profile</h1>
                           <p classNale="lead" style={{marginLeft:"200px"}}>Let's edit some informations about you</p>
                       <form onSubmit={this.onSubmit}>
                           
                       <textarea className="form-control form-control_lg md-8" placeholder="add your bio..." name="bio" value={this.state.bio}onChange={this.handleChange} 
                       />
                       {<small style={{marginBottom:"10px"}} className="form-text text-muted">add bio</small>}
                       {<div className="invalid-feedback">bio invalid </div>}

                       <input className="form-control form-control_lg md-8" placeholder="skills..." name="skills" value={this.state.skills}onChange={this.handleChange} />
                       {<small style={{marginBottom:"10px"}} className="form-text text-muted">please seperate your skills with ,</small>}
                       {<div className="invalid-feedback">inviled skills</div>}
                    
                       <small className="d-block-pb-3" style={{color:"red",float:"right"}}>*=required fileds</small>                     
                       <input className="form-control form-control_lg" placeholder="* Your Status..." name="status" value={this.state.status}onChange={this.handleChange}   required/>
                       {<small className="form-text text-muted">add your situation</small>}
                       {<div className="invalid-feedback">you must add your status </div>}
                           <input type="submit" value="Edit Profile" className="btn btn-info btn-block mt-4"/>
                           
                           
                           </form>
                       </div>


                   </div>
               </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    employe:state.employeReducer.employe,
    errors:state.errorReducer
})


export default connect(mapStateToProps,{createProfile,getcurrentEmploye} )(withRouter(create))

