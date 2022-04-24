import axios from "axios";
import {actionTypes} from "../actionTypes";

export const contactsAction = () => async (dispatch) => {

    if(!localStorage.hasOwnProperty('contacts')){
        const res = await axios.get("./contacts.json")
        const body = await res.data
        localStorage.setItem( "contacts", JSON.stringify(body))
        return dispatch({
            type: actionTypes.CONTACTS_LIST,
            payload: body
        })
    } else {
        return dispatch({
            type: actionTypes.CONTACTS_LIST,
            payload: JSON.parse(localStorage.getItem( "contacts"))
        })
    }

}

export const contactChatAction = (name) => (dispatch) => {
    return dispatch({
        type: actionTypes.CONTACT_CHAT,
        payload: name
    })
}

export const contactUpdateAction = (newContact) => (dispatch) => {
    localStorage.setItem( "contacts", JSON.stringify(newContact))
    return dispatch({
        type: actionTypes.CONTACTS_LIST,
        payload: newContact
    })
}

export const contactChatLoading = (isLoading) => (dispatch) => {
    return dispatch({
        type: actionTypes.CONTACT_CHATTING,
        payload: isLoading
    })
}