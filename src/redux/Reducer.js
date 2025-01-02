import { DELETE_USER, FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./ActionType";

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


        default: return state;
    }
}