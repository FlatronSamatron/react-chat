import React, {Component} from 'react';

import MsgChatHeader from "./MsgChatHeader/MsgChatHeader";

import {connect} from "react-redux";
import MsgChatChat from "./MsgChatChat/MsgChatChat";
import MsgChatInput from "./MsgChatInput/MsgChatInput";

import "./MsgChat.css"

class MsgChat extends Component {

    render() {
        const {chatUser, chatUserList} = this.props

        const contactUser = chatUserList.filter( contact => {
            return contact.name === chatUser
        })[0]

        const contactIcon = contactUser?.avatar
        const contactName = contactUser?.name
        const contactChat = contactUser?.history

        return (
            <div className="msg-chat">
                <MsgChatHeader contactIcon={contactIcon} contactName={contactName}/>
                <MsgChatChat contactChat={contactChat} contactIcon={contactIcon}/>
                <MsgChatInput contactChat={contactChat} contactUser={contactUser}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        chatUserList: state.contactsReducer.contacts,
        chatUser: state.contactsReducer.contactChat
    }
}


export default connect(mapStateToProps)(MsgChat);