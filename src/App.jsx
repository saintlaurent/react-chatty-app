import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
require('../styles/application.scss');
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Catherine"},
      messages: [
          {
              username: "Bob",
              content: "Has anyone seen my marbles?",
          },
          {
              username: "Anonymous",
              content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
          }
      ]
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


    handleKeyPress(e){
    console.log("Key Pressed");
      const newMsg = { username: "New User" , content: "New Content"};
      if(e.key === 'Enter') {
        this.setState({messages: this.messages.push(newMsg)});
      }
    }
  render() {
    return (
        <div>

          <MessageList messages={this.state.messages} />
          <ChatBar onKeyPress={this.handleKeyPress} currentUser={this.state.currentUser.name} />
        </div>
    )
  }
}
export default App;
