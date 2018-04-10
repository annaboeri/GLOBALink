import React from 'react'
import socketIOClient from 'socket.io-client'

class Chat extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            endpoint: "http://localhost:3001",
            fields: { username: '', message: ''},
            allMessages: []
        }    

        const socket = socketIOClient(this.state.endpoint);
        socket.on('broadcast-message', function(msg){
            addMessage(msg);
        });

        const addMessage = msg => {
            console.log(msg)
            this.setState({allMessages: [...this.state.allMessages, msg]});
            console.log(this.state.allMessages);
        };

        this.onInputChange = (evt) => {
            this.setState({
                fields: {
                    ...this.state.fields,
                    [evt.target.name]: evt.target.value
                }
            })
            console.log(this.state.fields.username, this.state.fields.message)
        }

    
        this.sendMessage = (evt) => {
            console.log(this.state.fields.username, this.state.fields.message)
            evt.preventDefault()
            const socket = socketIOClient(this.state.endpoint)
            socket.emit('broadcast-message', {
                author: this.state.fields.username,
                message: this.state.fields.message
            })
            this.setState({ fields: { message: '', username: this.state.fields.username}})  
        }
    }


    render(){
        return (
		<div className='Chat'>
			<h1>GLOBALink Chat</h1>
            <div className="messages">
               { this.state.allMessages.map((message, index) => {
                   return (
                       <div key={index}>{message.author}: {message.message}</div>
                   )
               })}
            </div>
            <form onChange={this.onInputChange.bind(this)} onSubmit={this.sendMessage.bind(this)}>
                <input type="text" placeholder="Username" name="username" value={this.state.fields.username} />
				<input type="text" placeholder="Message" name="message" value={this.state.fields.message} />               
                <button>Send Message</button>
            </form>
		</div>
	)
 }
}


export default Chat