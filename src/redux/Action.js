import axios from "axios"
import { DELETE_USER, FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./ActionType"
import { RootApi } from "../config/RootApi"

export const makeRequest=() => {
    return {
        type: MAKE_REQUEST,
    }
    
}

export const failRequest=(err) => {
    return {
        type: FAIL_REQUEST,
        payload: err,
    }
    
}

export const getUserList=(data) => {
    return {
        type: GET_USER_LIST,
        payload: data,
    }
    
}

export const deleteUser=() => {
    return {
        type: DELETE_USER,
    }
    
}

export const fetchUserListAction = () => {
    return (dispatch) => {
        dispatch(makeRequest());

        // setTimeout(() => {
            RootApi.get('/users').then((resp) => {

                const userList = resp.data.reverse();
                console.log('userList=>', userList);
                dispatch(getUserList(userList));
                return userList;
            }).catch((err) => {
                dispatch(failRequest(err.message));
    
            })
        // }, 2000);
       
   } 

}

export const removeUserAction = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());

        setTimeout(() => {
            RootApi.delete(`/users/${code}`).then((resp) => {

                dispatch(deleteUser());
            }).catch((err) => {
                dispatch(failRequest(err.message));
    
            })
        }, 2000);
       
   } 

}
