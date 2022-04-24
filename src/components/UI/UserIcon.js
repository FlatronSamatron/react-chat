import React, {Component} from 'react';
import "./UI.css"

class UserIcon extends Component {
    render() {
        const {img, isOnline} = this.props
        return (
            <div className="user-img">
                <img src={img} alt="user-img"/>
                {isOnline && <div className="user-online">&#10004;</div>}
            </div>
        );
    }
}

export default UserIcon;