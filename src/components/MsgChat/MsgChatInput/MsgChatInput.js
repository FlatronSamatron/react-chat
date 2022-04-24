import React, {Component} from 'react';

import "./MsgChatInput.css"
import {contactChatLoading, contactUpdateAction} from "../../../redux/actions/contactsAction";
import {connect} from "react-redux";
import axios from "axios";

class MsgChatInput extends Component {

    state={
        inputText: ""
    }

    inputHandler = (e) => {
        this.setState({inputText: e.target.value})
    }

    createNewMessage = (message, msgAuthor) => {
        const {contactUser, chatUserList} = this.props
        const author = msgAuthor ? msgAuthor : "user"
        const newDate = new Date()
        const date = newDate.toISOString().split('T')[0]
        const text = message
        const time = newDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        const newMessage = [...contactUser.history, {author, text, date, time}]
        const newContactObject = {...contactUser, history:newMessage}

        return chatUserList.map((contact) => {
            return contact.name === contactUser.name ? newContactObject : contact
        })
    }

    requestToChucknorris = async () => {
        const {onChatContactUpdate, onContactChatLoading, contactUser} = this.props

        const max = 5000;
        const min = 1000
        const randomTime = min - 0.5 + Math.random() * (max - min + 1)

        const res = await axios.get("https://api.chucknorris.io/jokes/random")
        const data = await res.data
        onContactChatLoading({isLoading: true, contactName: contactUser.name})
        setTimeout(()=>{
            onChatContactUpdate(this.createNewMessage(data.value, "contact"))
            onContactChatLoading({isLoading: false, contactName: ""})
        }, randomTime)
    }

    submitHandler = (e) => {
        const {onChatContactUpdate} = this.props
        e.preventDefault()
        this.setState({inputText: ""})

        onChatContactUpdate(this.createNewMessage(this.state.inputText))

        this.requestToChucknorris()
    }

    render() {
        return (
            <form className="chat-input" onSubmit={(e)=>this.submitHandler(e)}>
                <input type="text"
                       value={this.state.inputText}
                       onChange={(e)=>this.inputHandler(e)}
                />
                {/*<img src="" alt=""/>*/}
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        chatUserList: state.contactsReducer.contacts,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChatContactUpdate: newContact => dispatch(contactUpdateAction(newContact)),
        onContactChatLoading: isLoading => dispatch(contactChatLoading(isLoading))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MsgChatInput);