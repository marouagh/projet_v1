import {REGISTER_USER ,REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAIL,
    AUTH_USER,AUTH_SUCCESS, AUTH_FAIL,LOGOUT,EDIT_USER,GET_USERS} from '../constants/actions.types'


const initialState = {
    isLoading: false,
    profiles:[]

} 
const authReducer = (state=initialState, {type, payload}) =>{
    switch(type){
        case REGISTER_USER:
            return{
                ...state,
                isLoading: true,
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                isLoading: false,
                user:payload
            }
        case REGISTER_FAIL:
            return{
                ...state,
                isLoading: false,
                error:payload
            }
        case LOGIN_USER:
            return{
                ...state,
                isLoading: true,
                }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isauth:true
                }
        case LOGIN_FAIL:
            return{
                ...state,
                isLoading: false,
                error:payload
                }
        case AUTH_USER:
            return{
                ...state,
                isLoading: true,
                }
        case AUTH_SUCCESS:
            return{
                ...state,
                isLoading: false,
               profile: payload
                        }
        case AUTH_FAIL:
            return{
                ...state,
                isLoading: false,
               isAuthorized: false
                        }
             case LOGOUT:
                 localStorage.removeItem("token");
                  return {
                  ...state,
                     token: null,
                     isAuth: null,
                     isLoading: false,
                     profile: {},
                     errors: {}
                            };
                            case EDIT_USER:
                                return {
                                  ...state,
                                  profile: payload,
                                  isloading: false,
                        
                          };
                          case GET_USERS:
                            return {
                              ...state,
                              profiles: payload,
                              isloading: false,
                    
                      };
                      


        default:
            return state;
    }
}
export
 default authReducer