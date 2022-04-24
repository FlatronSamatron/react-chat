import {actionTypes} from "../actionTypes"

const initialState = {
    contacts: [],
    contactChat: "",
    isContactChatting: {
        isLoading: false,
        contactName: ""
    }
}

export const contactsReducer = (state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.CONTACTS_LIST:
            return {...state, contacts: action.payload}
        case actionTypes.CONTACT_CHAT:
            return {...state, contactChat: action.payload}
        case actionTypes.CONTACT_CHATTING:
            return {...state, isContactChatting: action.payload}
        default:
            return state
    }
}
