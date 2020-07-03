import React, { Component } from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import { connect } from 'react-redux';
import { deleteExperience } from '../js/actions/employeAction';
import {Link} from 'react-router-dom'

 class experience extends Component {
    render() {
        const experience=this.props.exp.map((exp,i)=>(
            <tr key={exp._id}>
                 <td>{i+1}</td>
               
                <td>{exp.title}</td>
                <td>{exp.company}</td>
                <td>{exp.location}</td>
                <td> <Moment format='YYYY/MM/DD'>{moment.utc(exp.from)}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{moment.utc(exp.to)}</Moment>
        )}
      </td>
      <td>
        {/* <button
        //   onClick={() => deleteExperience(exp._id)}
          className="btn btn-danger"
        >
          Delete
        </button> */}<i className="fa fa-trash " aria-hidden="true" onClick={() =>this.props. deleteExperience(exp._id)}></i>
      </td>
            </tr>
        ))
        return (
            <div style={{marginBottom:"30px"}}>
                  <h2 className='my-2'>List Of Experiences</h2>
                  <Link to='/addExperience'>
      <button type="button" style={{marginLeft:"12px"}}class="btn btn-primary active"><i class="fab fa-black-tie text-info mr-1 "/>Add Experience</button>
      
      
      </Link>
      <table className='table col-md-8'>
        <thead className="thead-light ">
          <tr>
          <th className='hide-sm'>N°</th>
          <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Company</th>
        
            <th className='hide-sm'>Location</th>
            <th >Period</th>
           
            <th className='spacee' />
       
          </tr>

        </thead>
        <tbody>{experience}</tbody>
      </table>
     
     
            </div>
        )
    }
}export default connect(null,{deleteExperience} ) (experience)
