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
        }
    
        this.sendMessage = (evt) => {
            console.log(this.state.username, this.state.message)
            evt.preventDefault()
            const socket = socketIOClient(this.state.endpoint)
            socket.emit('broadcast-message', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({ message: ''})  
        }
    }


    render(){
        return (
		<div className='Chat'>
			<h1>GLOBALink Chat</h1>
            <div className="messages">
               { this.state.allMessages.map(message => {
                   return (
                       <div>{message.author}: {message.message}</div>
                   )
               })}
            </div>
            <form onSubmit={this.sendMessage.bind(this)}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={this.state.username} 
                    onChange={ev => this.setState({username: ev.target.value})} />
                <input 
                    type="text" 
                    placeholder="Message" 
                    name="message" 
                    value={this.state.message}
                    onChange={ev => this.setState({message: ev.target.value})} />               
                <button>Send Message</button>
            </form>
		</div>
	)
 }
}


export default Chat