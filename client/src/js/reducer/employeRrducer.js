import{GET_EMPLOYE, EMPLOYE_LOADING, UPDATE_EMPLOYE,EMPLOYE_ERROR,GET_ERRORS,CLEAR_EMPLOYE,GET_EMPLOYES}from'../constants/actions.types'



const initialState = {
isLoading: false,
employe:null,
employes:[], error: {},
} 

const employeReducer = (state=initialState, action) =>{
    const { type, payload } = action;
    switch(type){
      
        case EMPLOYE_LOADING:
        return {
            ...state,
            isLoading:true
          };
        case GET_EMPLOYE:
        case UPDATE_EMPLOYE:
          return {
            ...state,
            employe: payload,
            isLoading: false,
          };
        case EMPLOYE_ERROR:
          return {
            ...state,
            error: payload,
            isLoading: false,
            // profile: null,
          };
        case CLEAR_EMPLOYE:
          return {
            ...state,
            employe: null,
    
            isLoading: false,
          };
        case GET_EMPLOYES:
          return {
            ...state,
            employes: payload,
            isLoading: false,
          };
    
        default:
          return state;
      }
    }
    export default employeReducer