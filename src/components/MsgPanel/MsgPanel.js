import React, {Component} from 'react';
import {connect} from "react-redux";

import MsgPanelHeader from "./MsgPanelHeader/MsgPanelHeader";
import MsgChatItems from "./MsgPanelChats/MsgChatItems";

import "./MsgPanel.css"
import {contactChatAction} from "../../redux/actions/contactsAction";

class MsgPanel extends Component {

    state = {
        contactList: []
    }

    dateSort = (d, t) => {
        const dateTime = `${d}, ${t}`
        const date = new Date(dateTime).getTime()
        return date
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.chatUserList.sort( (a,b) => {
            const bHistory = b.history[b.history.length-1]
            const aHistory = a.history[a.history.length-1]

            return this.dateSort(bHistory.date, bHistory.time) -
                this.dateSort(aHistory.date, aHistory.time)
        })

        if(!this.state.contactList.length){
            this.setState({
                contactList: this.props.chatUserList
            })
            this.props.onChatContact(this.props.chatUserList[0].name)
        }
        if(prevState.contactList !== this.props.chatUserList){
            this.setState({
                contactList: this.props.chatUserList
            })
        }
    }


    changeChatContact = (contact) => {
        this.props.onChatContact(contact)
    }

    contactSearch = (search) => {
        const searchContact = this.state.contactList.filter( contact => {
            return contact.name.toLowerCase().includes(search.toLowerCase())
        })
        this.setState({
            contactList: !!search ? searchContact : this.props.chatUserList
        })
    }


    render() {

        return (
            <div className="msg-panel">
                <MsgPanelHeader
                    contactSearch={(search)=>this.contactSearch(search)}
                />
                <h2 className="panel-chats-header">Chats</h2>
                <MsgChatItems
                    contactList={this.state.contactList}
                    changeChatContact={(name)=>this.changeChatContact(name)}
                />
            </div>
        );
    }
}

//todo

function mapStateToProps(state) {
    return {
        chatUserList: state.contactsReducer.contacts,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChatContact: contact => dispatch(contactChatAction(contact))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MsgPanel);