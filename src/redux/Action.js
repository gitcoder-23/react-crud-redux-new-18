import axios from "axios"
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJECT, MAKE_REQUEST, UPDATE_USER } from "./ActionType"
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

export const addUser=() => {
    return {
        type: ADD_USER,
    }
    
}

export const updateUser=() => {
    return {
        type: UPDATE_USER,
    }
    
}



export const getUserObj=(data) => {
    return {
        type: GET_USER_OBJECT,
        payload: data,
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

        RootApi.delete(`/users/${code}`).then((resp) => {

            dispatch(deleteUser());
        }).catch((err) => {
            dispatch(failRequest(err.message));

        })
       
   } 

}

export const addUserAction = ({ formData }) => {
    console.log('userFormData-action=>', formData);
    
    return (dispatch) => {
        dispatch(makeRequest());

        RootApi.post(`/users`, formData).then((resp) => {

            dispatch(addUser());
        }).catch((err) => {
            dispatch(failRequest(err.message));

        })
       
   } 

}
export const updateUserAction = ({ formData, userId }) => {
    console.log('userFormData-action=>', formData);
    
    return (dispatch) => {
        dispatch(makeRequest());

        RootApi.put(`/users/${userId}`, formData).then((resp) => {

            dispatch(updateUser());
        }).catch((err) => {
            dispatch(failRequest(err.message));

        })
       
   } 

}
export const fetchSingleAction = ({ userId }) => {
    
    return (dispatch) => {
        dispatch(makeRequest());

        RootApi.get(`/users/${userId}`).then((resp) => {
            const userData = resp.data;
            console.log('userData-action=>', userData);

            dispatch(getUserObj(userData));
            return userData;

        }).catch((err) => {
            dispatch(failRequest(err.message));

        })
       
   } 

}
