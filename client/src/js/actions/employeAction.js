import axios from 'axios';
import { GET_EMPLOYE,EMPLOYE_LOADING,UPDATE_ANNONCE,GET_ERRORS,CLEAR_EMPLOYE,AUTH_USER,LOGOUT, UPDATE_EMPLOYE,EMPLOYE_ERROR} from '../constants/actions.types'

//get current profile employe
export const getcurrentEmploye=()=>async (dispatch)=>{
    dispatch(setEmployeLoading());
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    };
    try {
        const res = await axios.get('/employe/me',config);
        dispatch({
          type: GET_EMPLOYE,
          payload: res.data,
        });
      } 
    catch(err)
       { dispatch({
            type:GET_EMPLOYE,
            payload: {},

       })}}


//profile loading
export const setEmployeLoading=()=>{
    return{
        type:EMPLOYE_LOADING,
    }
}

//profile loading
export const clearEmploye=()=>{
  return{
      type:CLEAR_EMPLOYE,
  }
}


// Create or update profile
export const createProfile = (formData, history) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    };

     axios.post('/employe', formData, config).then (res=> history.push('./profile'))
    }
     catch (err)
     {dispatch({
        type:GET_ERRORS,
        payload:err.response.data
      })
    }}
// add experience employe
export const addExperience = (formData, history) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    };

     axios.post('/employe/experience', formData, config).then (res=> history.push('./profile'))
    }
     catch (err)
     {dispatch({
        type:GET_ERRORS,
        payload:err.response.data
      })
    }}
    //delete account and profile employe
    export const deleteprofile=()=> dispatch=>{
     
        try {
          const config = {
            headers: {
              Authorization: localStorage.getItem('token')
            }
          };
      
      axios.delete('/employe/delete',config).then(res=>
          dispatch({
            type:AUTH_USER,
            payload:{}
          }),
          dispatch({ type: LOGOUT }),
          dispatch(alert('Account is Removed :(((', 'success'))
          )} catch(err){ dispatch({
            type:GET_ERRORS,
            payload:err.response.data
          
          })}
      }
   

    //delete experience
    export const deleteExperience = (id) => async (dispatch) => {
      try {
        const config = {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        };
        const res = await axios.delete(`/employe/experience/${id}`,config);
    
        dispatch({
          type: UPDATE_EMPLOYE,
          payload: res.data,
        });
        dispatch(alert('experience Removed', 'success'));
      } catch (err) {
        dispatch({
          type: EMPLOYE_ERROR,
          payload: {},
        });
      }
    };


    // add postule employe
export const addPost = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    };

     axios.post('/employe/postule', formData, config).then (res=> history.push('./profile'))
    }
     catch (err)
     {dispatch({
        type:GET_ERRORS,
        payload:err.response.data
      })
    }}
    

    //delete post
    export const deletePost = (id) => async (dispatch) => {
      try {
        const config = {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        };
        const res = await axios.delete(`/employe/postule/${id}`,config)
    
       dispatch({
          type: UPDATE_EMPLOYE,
          payload: res.data,
        })
       
        
      } catch (err) {
        dispatch({
          type: EMPLOYE_ERROR,
          payload: {},
        });
      }
    };

