import React, {Component} from 'react';
import UserIcon from "../../UI/UserIcon";

import "./MsgChatHeader.css"

class MsgChatHeader extends Component {

    render() {
        const {contactName, contactIcon} = this.props

        return (
            <div className="msg-chat-header">
                <UserIcon img={contactIcon} isOnline={true}/>
                <p className="chat-user-name">{contactName}</p>
            </div>
        );
    }
}


export default MsgChatHeader;