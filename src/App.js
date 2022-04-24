import React, {Component} from 'react';
import {contactsAction} from "./redux/actions/contactsAction";
import {connect} from "react-redux";

import MsgPanel from "./components/MsgPanel/MsgPanel";
import MsgChat from "./components/MsgChat/MsgChat";

import "./App.css"

class App extends Component {


    componentDidMount() {
        this.props.onContactList()
    }


    render() {
        return (
            <div className="app">
                <MsgPanel/>
                <MsgChat/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onContactList: () => dispatch(contactsAction())
    }
}

export default connect(null, mapDispatchToProps)(App);
