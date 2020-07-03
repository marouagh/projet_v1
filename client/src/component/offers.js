import React, { Component } from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import { connect } from 'react-redux';
import { deletePost } from '../js/actions/employeAction';
import {Link} from 'react-router-dom'

 class experience extends Component {
  
    render() {

        const job=this.props.offre.map((exp,i)=>(
            <tr key={exp._id}>

                <td>{exp.ref}</td>
                <td>{exp.name}</td>
                <td> <Moment format='YYYY/MM/DD'>{moment.utc(exp.date)}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{moment.utc(exp.deadline)}</Moment>
        )}
      </td>
      <td>
       
        <i className="fa fa-trash " aria-hidden="true" onClick={() =>this.props.deletePost(exp._id)}></i>
      </td>
            </tr>
        ))
        return (
          
            <div>
                
                  <h2 className='my-2'>Job Postulate</h2>
                  <div className="jobdiv">
      <table className='table bg-white' style={{marginLeft:"12px",marginRight:"-20px"}}>
        <thead className="thead-light  ">
          <tr>
          <th className='hide-sm'>N°REF</th>
          <th className='hide-sm'>Post Title</th>
        
            <th >Period</th>
            <th ></th>
          
       
          </tr>

        </thead>
        <tbody>{job}</tbody>
      </table>
     

            </div> </div>
        )
    }
}export default connect(null,{deletePost} ) (experience)
