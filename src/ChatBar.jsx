import React, {Component} from 'react';
class ChatBar extends Component {

    constructor(props) {
        super(props);
        }
    render(){
        console.log("Rendering ChatBar");
        return (
                <input type="text" defaultValue={this.props.currentUser}/>
            )

    }
}

export default ChatBar;