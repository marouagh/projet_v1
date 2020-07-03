import axios from "axios";
import { configToken } from "./authActions";
import {
 
  EDIT_USER
} from "../constants/actions.types";

//EDIT USER
export const editUser = (id,newUser) => async dispatch => {
  const config = configToken();
  try {
    await axios.put(`/${id}`,newUser, config).then(res=>
    dispatch({
      type: EDIT_USER,
      payload: id,
      pay:newUser
    }))
       
  } catch (error) {
    alert(error.response.data);
  }
};