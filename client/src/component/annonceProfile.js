import React, { Component } from 'react'
import Postuler from './postuler'
import moment from 'moment'
import Moment from 'react-moment'
 class annonceProfile extends Component {
   state={
     search:""
   }
   handleChange=(e)=>{
    this.setState({
      search:(e.target.value)
      
  }) 
   }

    render() {
      const an=this.props.ann.filter((el,i)=>el.name.toUpperCase().includes(this.state.search.toUpperCase().trim()))
      


        return (

          <div>
            <div className="input-group md-4 m-auto ">
  <div className="input-group-prepend ">
    <span className="input-group-text " id="basic-addon1" ><i class="fa fa-search" aria-hidden="true"></i></span>
  </div>
  <input type="text" name="search"placeholder="recherche..." class="form-control col-md-4 "  value={this.state.search} onChange={this.handleChange} ></input>
  

</div>
{<small  style={{marginBottom:"12px",marginTop:"2px"}} className="form-text text-muted">a quick search by name of the job offer</small>}
                
            <div className="name" >


              {an.map((el,i)=>(
                 
                   
      <div className="our-team">
        <span style={{fontSize:"15px",marginLeft:"12px"}}><strong>Poste Reference: </strong></span>

<label style= {{fontSize:"25px",color:"red"}}><strong>{el.ref}</strong></label><br/>
      <span style={{fontSize:"15px",marginLeft:"12px"}}><strong>Poste Title: </strong></span>

        <span>{el.name.toUpperCase()} </span> <br/> 
        
        <span style={{fontSize:"15px",marginLeft:"12px"}}><strong>Poste Description: </strong></span>

          <p >{el.description}</p><br/>
          <span style={{fontSize:"15px",marginLeft:"12px"}}><strong>Date: </strong></span>

          <label className="title">{el.date}</label>  <br/>       <span style={{fontSize:"15px",marginLeft:"12px"}}><strong>Poste Deadline: </strong></span>

<label className="title">{el.deadline}</label><br/>
          <span style={{fontSize:"15px",marginLeft:"12px"}}><strong>Company Email: </strong></span>

        < label className="title">{el.email}</label><br/>
        <span style={{fontSize:"15px",marginLeft:"12px"}}><strong>Company Number: </strong></span>

        <label className="title">{el.telephone}</label><br/>

     
        <div class="social">

        <Postuler el={el} />
    

   </div>
    </div>
  
  
              
              ))}
          </div></div>
        )
    }
}
    
export default annonceProfile
