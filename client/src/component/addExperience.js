import React, { Component,useState } from 'react'
import { Link, withRouter,Redirect } from 'react-router-dom';
import { addExperience,getcurrentEmploye } from '../js/actions/employeAction';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux'
import Footer from './layout/footer'
import Nav from './Navbar';


 class create extends Component {
constructor(props){
    super(props);
    

    this.state={
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        description: '',
        errors:{},
     
    }
}

componentWillMount(){


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
       company:this.state.company,
       title:this.state.title,
       location: this.state.location,
       from: this.state.from,
       to: this.state.to,
       description: this.state.description

   } 
   this.props.addExperience(profileData,this.props.history)
}

handleChange=(e)=>{
        
          
            this.setState({
                [e.target.name]:(e.target.value)
            }) }
          
    
          handleChangeDate=(e)=>{
    
    this.setState({
        [e.target.name]:(e.target.value)
        
    }) 
}
          
 


    render() {
        const{errors}=this.state
        return (
            <div>
                <Nav/>
                <div className="content"> 
               <div className="container">
                   <div className="row">
                       <div className="col-md-8 m-auto">
                           <h1 className="display-4 text-center">Add Experience</h1>
                           <p classNale="lead" style={{marginLeft:"250px"}}>Add your experience</p>
                       <form onSubmit={this.onSubmit}>

                       <input  className="form-control form-control_lg md-8" placeholder="title..." name="title" value={this.state.title}onChange={this.handleChange} />
                       {<small style={{marginBottom:"10px"}} className="form-text text-muted">the poste title</small>}
                       {<div className="invalid-feedback">Add Title </div>}
                       <small className="d-block-pb-3" style={{color:"red",float:"right"}}>*=required fileds</small>                     
                       <input className="form-control form-control_lg" style={{marginTop:"10px"}}placeholder="* Company..." name="company" value={this.state.company}onChange={this.handleChange} required   />
                       {<small className="form-text text-muted">add your location</small>}
                      
                       <small className="d-block-pb-3" style={{color:"red",float:"right"}}>*=required fileds</small>                     

                       <input style={{marginTop:"20px"}} className="form-control form-control_lg" placeholder="* Location..." name="location" value={this.state.location}onChange={this.handleChange} required   />
                       {<small className="form-text text-muted">add your location</small>}
                       {<div className="invalid-feedback">you must add your location job </div>}
                      
                      
                    {/* <div className="form-check-mb-4">
                        <input type="checkbox" className="form-check-input"
                        name="current"value={this.state.current}checked={this.state.current}onChange={this.oncheck}/>
<label htmlFor="current" className="form-check-label">Current Job</label>
                    </div> */}
                   
                    <textarea cols='30'
          rows='5'style={{marginTop:"20px"}} className="form-control form-control_lg" placeholder="job description..." name="description" error={errors.description} value={this.state.description}onChange={this.handleChange} info="Tell us about your position"/>
                   
                    <div className="row">
                       <div className="col-md-4 ">
                       <label  style={{marginTop:"10px"}}><strong>From date</strong></label>
                       <small className="d-block-pb-3" style={{color:"red",float:"right",marginTop:"10px"}}>*=required fileds</small>                     
                       <input className="form-control" type="date" placeholder="* add date..." name="from" value={this.state.from} onChange={this.handleChangeDate}  error={errors.from} required />
                       {<small className="form-text text-muted">from the date</small>}
                       {<div className="invalid-feedback">you must add date start job </div>}





                        <label><strong>To date</strong></label>
                       <input className="form-control" type="date" placeholder="* add date..." name="to" value={this.state.date}onChange={this.handleChangeDate} />
                       {<small className="form-text text-muted">add the date</small>}
                       {<div className="invalid-feedback">you must add date start job </div>}
                       </div>
                         </div>
                   
<Link to="/profile">
                    <input type="button" value="Annuler" className="btn btn-outline-secondary  mt-4" style={{float:"right",border:"50px  dark"}} onClick={this.annuler}/>

                    </Link>      
                    <input type="submit" value="Submit" className="btn btn-info  mt-4" style={{float:"right",width:"200px",marginRight:"12px"}}/>
  
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


export default connect(mapStateToProps,{addExperience} )(withRouter(create))

