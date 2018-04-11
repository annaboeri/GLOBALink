import React from 'react'
import socketIOClient from 'socket.io-client'
import './Chat.css'

class Chat extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            endpoint: "http://localhost:3001",
            fields: { username: this.props.user.name, id: this.props.user._id, message: ''},
            allMessages: [],
            allUsers: []
        }  
        
        this.componentDidMount = () => {
            const socket = socketIOClient(this.state.endpoint)
            socket.emit('broadcast-user', {
                name: this.state.fields.username,
                id: this.state.fields.id
            })
            socket.on('broadcast-user', function(user){
                console.log("User sent to client", user)
                addUser(user)
            })
        }

        const addUser = user => {
            this.setState({
                allUsers: [...this.state.allUsers, user]
            })
        }

        const socket = socketIOClient(this.state.endpoint);
        socket.on('broadcast-message', function(msg){
            addMessage(msg)
        })

        const addMessage = msg => {
            this.setState({
                allMessages: [...this.state.allMessages, msg],
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
                id: this.state.fields.username,
                message: this.state.fields.message
            })
            this.setState({ 
                fields: { username: this.props.user.name, id: this.props.user._id, message: '' }
            })  
        }
    }


    render(){
        console.log(this.state.allUsers)
        return (
		<div className="Chat container">
            <div className="row">
                <div className="column column-50">
                    <div className="chatBox">
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
                        <h3>Online Users: {this.state.allUsers.length}</h3>
                            { this.state.allUsers.map((user, index) => {
                            if(this.props.user._id === user.id) {
                                return (
                                    <li key={index}>{user.name} (You)</li>     
                                )
                            }
                            return (
                                <li key={index}>{user.name}</li>                            
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