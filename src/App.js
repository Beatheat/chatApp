import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import NewRoomForm from './components/NewRoomForm'
import { tokenUrl, instanceLocator } from './config'
import ChatKit from '@pusher/chatkit-client'

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      joinableRooms: [],
      joinedRooms: [],
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    const chatManager = new ChatKit.ChatManager({
      instanceLocator,
      userId: 'abdallah',
      tokenProvider: new ChatKit.TokenProvider({
        url: tokenUrl
      })

    })

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.currentUser.getJoinableRooms()
          .then(joinableRooms =>{
            this.setState({
              joinableRooms,
              joinedRooms: this.currentUser.rooms
            })
          })
        .catch(err => console.log('error on joinableRooms: ', err))
        currentUser.subscribeToRoom({
          roomId: currentUser.rooms[0].id,
          messageLimit: 20,
          hooks: {
            onMessage: message => {
              // console.log("Received message:", message.text)
              this.setState({
                messages: [...this.state.messages, message]
              })
            }
          }
        })
      })
      .catch(err => console.log('error on joinableRooms: ', err))
    
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text: text,
      roomId: this.currentUser.rooms[0].id
    })
  }

  render() {
    return (
      <div className="app">
        <RoomList rooms={[...this.state.joinableRooms,...this.state.joinedRooms]}/>
        <MessageList messages={this.state.messages}/>
        <SendMessageForm sendMessage={this.sendMessage}/>
        <NewRoomForm />

      </div>
    );
  }
}

export default App;
