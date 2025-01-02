import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJECT, MAKE_REQUEST, UPDATE_USER } from "./ActionType";

const initialState = {

    loading: true,
    userList: [],
    userObj: {},
    errorMessage: '',
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case MAKE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            }
        
        case GET_USER_LIST:
            return {
                ...state,
                loading: false,
                userList: action.payload,
                userObj: {},
                errorMessage: ''
            }
        
        case DELETE_USER:
            return {
                ...state,
                loading: false,
                // userList: action.payload,
                // userObj: {},
                // errorMessage: ''
            }
        
        case ADD_USER:
            return {
                ...state,
                loading: false,
            }
        
        case UPDATE_USER:
            return {
                ...state,
                loading: false,
            }

        
        case GET_USER_OBJECT:
            return {
                ...state,
                loading: false,
                userObj: action.payload,
            }
            

        default: return state;
    }
}