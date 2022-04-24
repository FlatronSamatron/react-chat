import React, {Component} from 'react';
import "./UI.css"

class LoadingChat extends Component {
    render() {
        return (
            <div className="loading">
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

export default LoadingChat;