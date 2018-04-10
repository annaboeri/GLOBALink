import React from 'react'
import socketIOClient from 'socket.io-client'
import './Chat.css'

class Chat extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            endpoint: "http://localhost:3001",
            fields: { username: this.props.user.name, message: ''},
            allMessages: [],
            allUsers: []
        }    

        const socket = socketIOClient(this.state.endpoint);
        socket.on('broadcast-message', function(msg){
            console.log("Message Author", msg.author)
            addMessage(msg);
        })

        const addMessage = msg => {
            this.setState({
                allMessages: [...this.state.allMessages, msg],
                allUsers: [...this.state.allUsers, msg.author]
            })
        }

        this.onInputChange = (evt) => {
            this.setState({
                fields: {
                    ...this.state.fields,
                    [evt.target.name]: evt.target.value
                }
            })
        }

        this.sendMessage = (evt) => {
            evt.preventDefault()
            const socket = socketIOClient(this.state.endpoint)
            socket.emit('broadcast-message', {
                author: this.state.fields.username,
                message: this.state.fields.message
            })
            this.setState({ 
                fields: { message: ''}
            })  
        }
    }


    render(){
        console.log(this.state.allUsers)
        return (
		<div className="Chat container">
            <h1>GLOBALink Chat</h1>
            <div className="row">
                <div className="column column-50">
                    <div className="messages">
                    { this.state.allMessages.map((message, index) => {
                        return (
                            <div key={index}>{message.author}: {message.message}</div>
                        )
                    })}
                           </div>
                                <form onChange={this.onInputChange.bind(this)} onSubmit={this.sendMessage.bind(this)}>
                    <fieldset>
                            <label htmlFor="commentField">Message</label>
                            <input type="text" placeholder="Message" name="message" value={this.state.fields.message} />              
                            <input className="button-primary" type="submit" value="Send Message" />
                    </fieldset>
                    </form>
                </div>
                <div className="column column-50">
                    <ul>
                        <li>Online Users: {this.state.allUsers.length}</li>
                            { this.state.allUsers.map((user, index) => {
                            return (
                                <li key={index}>{user}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>
		</div>
	)
 }
}


export default Chat