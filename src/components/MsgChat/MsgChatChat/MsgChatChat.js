import React, {Component} from 'react';

import "./MsgChatChat.css"
import UserIcon from "../../UI/UserIcon";
import LoadingChat from "../../UI/LoadingChat";
import {connect} from "react-redux";

class MsgChatChat extends Component {

    render() {
        const {contactChat, contactIcon, isChatting, contactName} = this.props

        const chatList = contactChat?.map( ({author,date,text,time}, i) => {
            return <li key={date+i} className={author === "contact" ? "chat-item contact" : "chat-item user"}>
                {author === "contact" && <UserIcon img={contactIcon} isOnline={false}/>}
                <div className="chat-item-text">
                    <p className="text">{text}</p>
                    <p className="date">{date} {time}</p>
                </div>
            </li>
        })

        return (
            <ul className="chat-list">
                {chatList}
                {isChatting.isLoading && isChatting.contactName === contactName && <div className="chat-item contact">
                    <UserIcon img={contactIcon} isOnline={false}/>
                    <LoadingChat/>
                </div>}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        isChatting: state.contactsReducer.isContactChatting,
        contactName: state.contactsReducer.contactChat
    }
}

export default connect(mapStateToProps, null)(MsgChatChat);