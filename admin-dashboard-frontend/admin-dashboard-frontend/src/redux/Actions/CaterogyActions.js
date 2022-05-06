import { CATEROGY_CREATE_FAIL, CATEROGY_CREATE_REQUEST, CATEROGY_CREATE_SUCCESS, CATEROGY_DELETE_FAIL, CATEROGY_DELETE_REQUEST, CATEROGY_DELETE_SUCCESS, CATEROGY_EDIT_FAIL, CATEROGY_EDIT_REQUEST, CATEROGY_EDIT_SUCCESS, CATEROGY_LIST_FAIL, CATEROGY_LIST_REQUEST, CATEROGY_LIST_SUCCESS, CATEROGY_UPDATE_FAIL, CATEROGY_UPDATE_REQUEST, CATEROGY_UPDATE_SUCCESS } from "../Constants/Caterogy"
import axios from "axios"
import { logout } from "./userActions"


//get all caterogy
export const listCaterogy = () => async (dispatch, getState) => {

    try{
        dispatch({type: CATEROGY_LIST_REQUEST})

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(`/api/caterogy/all`,config)

        dispatch({type: CATEROGY_LIST_SUCCESS, payload: data})
        
    }catch(error){
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        if(message === "not authorized"){
            dispatch(logout())
        }
        dispatch({
            type: CATEROGY_LIST_FAIL,
            payload: message,
        })
    }
}

//delete caterogy
export const deleteCaterogy = (id) => async (dispatch, getState) => {

    try{
        dispatch({type: CATEROGY_DELETE_REQUEST})

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        await axios.delete(`/api/caterogy/${id}`,config)

        dispatch({type: CATEROGY_DELETE_SUCCESS })
        
    }catch(error){
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        if(message === "not authorized"){
            dispatch(logout())
        }
        dispatch({
            type: CATEROGY_DELETE_FAIL,
            payload: message,
        })
    }
}

//create caterogy
export const createCaterogy = (name,image) => async (dispatch, getState) => {

    try{
        dispatch({type: CATEROGY_CREATE_REQUEST})

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const{data} =  await axios.post(`/api/caterogy/`,{name, image},config)

        dispatch({type: CATEROGY_CREATE_SUCCESS, payload: data })
        
    }catch(error){
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        if(message === "not authorized"){
            dispatch(logout())
        }
        dispatch({
            type: CATEROGY_CREATE_FAIL,
            payload: message,
        })
    }
}

//update caterogy
export const updateCaterogy = (caterogy) => async (dispatch, getState) => {

    try{
        dispatch({type: CATEROGY_UPDATE_REQUEST})

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const{data} =  await axios.put(`/api/category/${caterogy._id}`,caterogy,config)

        dispatch({type: CATEROGY_UPDATE_SUCCESS, payload: data })
        
    }catch(error){
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        if(message === "not authorized"){
            dispatch(logout())
        }
        dispatch({
            type: CATEROGY_UPDATE_FAIL,
            payload: message,
        })
    }
}