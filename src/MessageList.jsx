import React, {Component} from 'react';
import Message from './Message.jsx';
class MessageList extends Component {

    constructor(props) {
        super(props);
    }

    renderList(){
        return this.props.messages.map((message) => {
            return (
                    <Message key={message.username} message={message.content} />
                )
        })
    }
    render(){
        return (
            <ul>
            {this.renderList()}
            </ul>
        )

    }
}

export default MessageList;