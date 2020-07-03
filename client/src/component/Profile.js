import React from 'react';
import { connect } from 'react-redux';
 import { Redirect } from 'react-router-dom';
import Nav from './Navbar';
import {Link} from 'react-router-dom'
import Profileactions from './profileActions'
 import { getcurrentEmploye,deleteprofile } from '../js/actions/employeAction';
 import {isAuthorized  } from '../js/actions/actions';
import Footer from './layout/footer'
import Spinner from './spinner'
import Experience from './experience'
import Account from './account'
import Offers from './offers'

 class Profile extends React.Component {
   
  
 componentDidMount() {
   
  this.props.getcurrentEmploye();
 
 }
deleteAccount(){
  this.props.deleteprofile();
}
 render() {
  const {profile}=this.props;
  const {isLoading,employe}=this.props;
  console.log(employe)
  let dach ;
  if(employe===null||isLoading){
  
    dach = <Spinner/>
   
  }
  else{
  
    //check profile empty or not
    if(Object.keys(employe).length>0)
    {
      dach = (
         <div>
                   <p className="lead text-muted">Welcome <Link to={`/profilePdf/${employe.user._id}'`}>{profile.name}</Link>  here is your profile what it looks like  </p>

<Account account={employe}/> 
<Experience exp={employe.experience}/>
<Offers offre={employe.postule}/>
<div style={{marginTop:"60px"}}>
  <Link to ="/" style={{marginLeft:"800px"}} onClick={()=> this.props.deleteprofile()}className="btn btn-danger"><strong>Delete Account</strong>
  
  </Link>
</div>
      </div>
      
       ) }
    else {
      //user has no proofile
    

      dach =( 
        <div>
        <p className="lead text-muted">Welcome {profile.name}  </p>
        <p>You have not yet setup a profile,please add something about you</p>
        <Link to='./createProfile' className="btn btn-lg btn-info">Create profile </Link>
        </div>
      )
    }
  }
  return (
    <div>
      <Nav/>
     <div className="content">
     
            
            <div class="jumbotron jumbotron-fluid" style={{marginTop:"-30px",marginLeft:"-50px"}}>
  <div class="container">
    <h1 class="display-4 "><strong>Profile Account</strong> </h1>
    <p class="lead"></p>
  </div>
</div>
            {dach}
          </div>
    

 <Footer/>
  
   </div> 
    
  )}
  
 }
 const mapStateToProps = state => ({
 isAuth: state.authReducer.isAuth,
profile: state.authReducer.profile,
employe:state.employeReducer.employe
 });
 export default connect(mapStateToProps, { getcurrentEmploye ,isAuthorized,deleteprofile })(Profile);
