import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { addPost} from '../js/actions/employeAction';
 import { getcurrentAnnonce} from '../js/actions/annonceAction';
import { connect } from 'react-redux'
import Footer from './layout/footer'
import Nav from './Navbar';
import Modal from 'react-modal'

 class create extends Component {

constructor(props){
    super(props);
    this.state={
        ref:this.props.el.ref,
        name:this.props.el.name,
        telephone:this.props.el.telephone,
        email:this.props.el.email,
       description:this.props.el.description,
       deadline:this.props.el.deadline,
       date:this.props.el.date,
       modalIsOpen:false,
      
    }
}
openModal = () => this.setState({ modalIsOpen: true });
closeModal = () => this.setState({ modalIsOpen: false });
componentWillMount(){
this.props.getcurrentAnnonce()&&
this.setState({
    ref:this.props.el.ref,
    name:this.props.el.name,
    telephone:this.props.el.telephone,
    email:this.props.el.email,
   description:this.props.el.description,
   deadline:this.props.el.deadline,
   date:this.props.el.date,
    
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
    ref:this.state.ref,
    name:this.state.name,
    telephone:this.state.telephone,
    email:this.state.email,
   description:this.state.description,
   deadline:this.state.deadline,
   date:this.state.date,
 
   } 
   this.props.addPost(profileData,this.props.history)
}

render() {

    return (
        <div>
                <button className="btn" style={{width:"200px"}} onClick={this.openModal}>Postuler</button>
<Modal isOpen={this.state. modalIsOpen}
    onRequestClose={this.closeModal} className="addModal">
        
      <form onSubmit={this.onSubmit} className='formModal' >
    
    <p style={{marginTop:"26px"}}>you become to apply on this job advertisement Ref N° : <strong>{this.props.el.ref}</strong>Post Title : <strong>{this.props.el.name}</strong> </p>
<div >
    <button className="btn1" style={{marginTop:"26px"}} >Confirmer</button>
    <button className="btn1" style={{width:"86px",marginTop:"20px"}}onClick={this.closeModal}>close</button>
    </div>
    </form>
</Modal>
        </div>
    )
}
}

const mapStateToProps = (state) => ({
    employe:state.employeReducer.employe,
    errors:state.errorReducer,
    annonce:state.annonceReducer.annonce
})


export default connect(mapStateToProps,{addPost,getcurrentAnnonce} )(withRouter(create))

