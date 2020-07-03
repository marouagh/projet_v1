import axios from 'axios';
import { ANNONCE_LOADING,GET_ERRORS,GET_ANNONCES,AUTH_USER,LOGOUT,GET_ANNONCE, UPDATE_ANNONCE} from '../constants/actions.types'





// //get current profile employe
export const getAllAnnonces=()=>async (dispatch)=>{
    dispatch(setAnnonceLoading());
//    const config = {
//      headers: {
//        Authorization: localStorage.getItem('token')
//     }
//    };
  try {
       const res = await axios.get('/annonce/all');
     dispatch({
         type: GET_ANNONCES,
          payload: res.data,
                 });
      } 
     catch(err)
       { dispatch({
            type:GET_ANNONCES,
             payload: [],
       })}}
// //get current profile employe
export const getcurrentAnnonce=()=>async (dispatch)=>{
  dispatch(setAnnonceLoading());
   const config = {
     headers: {
       Authorization: localStorage.getItem('token')
    }
   };
try {
     const res = await axios.get('/annonce/is',config);
   dispatch({
       type: GET_ANNONCE,
        payload: res.data,
               });
    } 
   catch(err)
     { dispatch({
          type:GET_ANNONCE,
           payload: {},
     })}}
 //profile loading
 export const setAnnonceLoading=()=>{
    return{
        type:ANNONCE_LOADING,
    }
}

// //profile loading
// export const clearEmploye=()=>{
//   return{
//       type:CLEAR_EMPLOYE,
//   }
// }


// // Create or update profile
// export const postulerAnnonce = (addAnnonce) => async (
//   dispatch
// ) => {
//   try {
//     const config = {
//       headers: {
//         Authorization: localStorage.getItem('token')
//       }
//     };

//      axios.post('/annonce', addAnnonce, config).then (res=> 
//    dispatch ({
//        type:ADD_ANNONCE
//    })
//         ))
//     }
//      catch (err)
//      {dispatch({
//         type:GET_ERRORS,
//         payload:err.response.data
//       })
//     }}
// // add experience employe
// export const addExperience = (formData, history) => async (
//   dispatch
// ) => {
//   try {
//     const config = {
//       headers: {
//         Authorization: localStorage.getItem('token')
//       }
//     };

//      axios.post('/employe/experience', formData, config).then (res=> history.push('./profile'))
//     }
//      catch (err)
//      {dispatch({
//         type:GET_ERRORS,
//         payload:err.response.data
//       })
//     }}
//     //delete account and profile employe
//     export const deleteprofile=()=> dispatch=>{
//       if (window.confirm("are you sure that you wanna delete your account ?")){
//         try {
//           const config = {
//             headers: {
//               Authorization: localStorage.getItem('token')
//             }
//           };
      
//         axios.delete('/employe/delete',config).then(res=>
//           dispatch({
//             type:AUTH_USER,
//             payload:{}
//           }),
//           dispatch({ type: LOGOUT })
//           )} catch(err){ dispatch({
//             type:GET_ERRORS,
//             payload:err.response.data
          
//           })}
//       }
//     }

//     //delete annonce
    export const deleteAnnonce = (id) => async (dispatch) => {
      try {
        const config = {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        };
        const res = await axios.delete(`/annonce/${id}`,config);
    
        dispatch({
          type: UPDATE_ANNONCE,
          payload: res.data,
        });
    
      } catch (err) {
        dispatch({
          type: GET_ERRORS,
          payload: { msg: err.response.statusText, status: err.response.status },
        });
      }
    };