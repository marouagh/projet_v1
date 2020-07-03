import React from 'react';
import { connect } from 'react-redux';
 import { Redirect } from 'react-router-dom';
import Nav from './Navbar';
import {Link} from 'react-router-dom'
import Profileactions from './profileActions'
 import {  getAllAnnonces } from '../js/actions/annonceAction';
 import {isAuthorized  } from '../js/actions/actions';
import Footer from './layout/footer'
import Spinner from './spinner'
import AnnonceProfile from './annonceProfile'
import Account from './account'
 class Profile extends React.Component {
   
  
 componentDidMount() {
   this.props. getAllAnnonces();
 
 }
// deleteAccount(){
//   this.props.deleteprofile();
// }
 render() {
  const {profile}=this.props;
  const {isLoading,annonces}=this.props;
  console.log(annonces)
  let dach ;
  if(annonces===null||isLoading){
    dach = <Spinner/>
  }else{
  
    //check profile empty or not
    if(Object.keys(annonces).length>0)
    {
      dach = (
         <div>
           <AnnonceProfile ann={annonces}/>
<div style={{marginTop:"60px"}}>
  {/* <Link to ="/" style={{marginLeft:"800px"}} onClick={()=> this.props.deleteprofile()}className="btn btn-danger"><strong>Delete Account</strong></Link> */}
</div>
      </div>
      
       ) }
    else {
      //user has no proofile
      dach =(
        <div>
        <p className="lead text-muted">Welcome </p>
        <p> Sorry doesn't existe Offers at the moment </p>
        </div>
      )
    }
  }
  return (
    <div>
      <Nav/>
     <div className="content">
            <div class="jumbotron jumbotron-fluid" style={{marginTop:"-80px",marginLeft:"-50px"}}>
  <div class="container"> 
    <h1 class="display-4 "><strong>Job offers</strong> </h1>
    <p className="lead text-muted">  here are all the existing job advertisements,hoping that you will find what you are looking for  </p>
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
annonces:state.annonceReducer.annonces
 });
 export default connect(mapStateToProps, {  getAllAnnonces ,isAuthorized })(Profile);
