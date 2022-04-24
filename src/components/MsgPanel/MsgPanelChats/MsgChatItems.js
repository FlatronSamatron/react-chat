import React, {Component} from 'react';

import UserIcon from "../../UI/UserIcon";

import "./MsgChatItems.css"


class MsgChatItems extends Component {

    render() {

        const {changeChatContact, contactList} = this.props

        const chatContactList = contactList.map( ({name, avatar, history},i) => {

            const lastHistoryMessage = history[history.length-1]
            const date = new Date(lastHistoryMessage.date).toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric'})

            return <li className="chat-contact-list-item" key={name+i} onClick={()=>changeChatContact(name)}>
                <UserIcon img={avatar} isOnline={true}/>
                <div className="list-user-info">
                    <p className="list-user-name">{name}</p>
                    <p className="list-user-msg">{lastHistoryMessage.text}</p>
                </div>
                <div className="list-user-date">{date}</div>
            </li>
        })

        return (
            <ul className="chat-contact-list">
                {chatContactList}
            </ul>
        );
    }
}

export default MsgChatItems;