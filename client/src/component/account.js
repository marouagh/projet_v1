import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class account extends Component {
    render() {

        return (
            <div style={{marginBottom:"30px"}}>
                 <div>
      <Link to='/editProfile'>
      <button style={{marginRight:"23px"}}type="button" class="btn btn-primary desactive"><i class="fas fa-user-circle text-info mr-1 "/>Edit Profile</button>
      </Link>
    </div>
                <div class="card col-md-8">
  <div class="card-header">
  <h2 className='my-2'>  Global Information </h2> 
  </div>
  <div class="card-body">
    <div >
      
         <label style={{fontSize:"15px"}}><strong>Name :</strong></label>
              <label style={{marginLeft:"45px",fontSize:"15px"}}>{this.props.account.user.name}</label> <br/>
              <label style={{fontSize:"15px"}}><strong>email :</strong></label>
              <label style={{marginLeft:"45px",fontSize:"15px"}}>{this.props.account.user.email}</label> <br/>
              <label style={{fontSize:"15px"}}><strong>Status :</strong></label>
              <label style={{marginLeft:"45px",fontSize:"15px"}}>{this.props.account.status}</label> <br/>
              <label style={{fontSize:"15px"}}><strong>Skills:</strong></label>
              <ul style={{marginLeft:"45px",fontSize:"15px"}}>{this.props.account.skills.map(e=>(<div>
                  <li>{e}</li></div>
              ))}              
               </ul> <br/>
               <label style={{fontSize:"15px"}}><strong>Bio :</strong></label>
              <label style={{marginLeft:"45px",fontSize:"15px"}}>{this.props.account.bio}</label> <br/>
     
    </div>
  </div>
</div>
            </div>
        )
    }
}
