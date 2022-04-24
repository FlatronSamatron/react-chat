import React, {Component} from 'react';
import UserIcon from "../../UI/UserIcon";

import "./MsgPanelHeader.css"

class MsgPanelHeader extends Component {
    render() {

        const {contactSearch} = this.props

        return (
            <div className="msg-panel-header">
                <UserIcon img="./images/user1.png" isOnline={true}/>
                <input type="text" placeholder="Search or start new chat" onChange={(e)=>contactSearch(e.target.value)}/>
            </div>
        );
    }
}

export default MsgPanelHeader;