import React from 'react'
import socketIOClient from 'socket.io-client'

class Chat extends React.Component {
    state = {
        endpoint: "http://localhost:3001",
        allMessages: [],
        message: ""
    }

	onInputChange(evt) {
		this.setState({
			message: evt.target.value
			}
        )
    }

    sendSocket = (evt) => {
        evt.preventDefault()
        const socket = socketIOClient(this.state.endpoint)
        socket.emit('broadcast-message', this.state.message)  
    }

    render(){
        const socket = socketIOClient(this.state.endpoint);
        socket.on('broadcast-message', (incomingMsg) => {
          this.setState({
            allMessages: [ ...this.state.allMessages, incomingMsg]
          })
        })
        return (
		<div className='Chat'>
			<h1>GLOBALink Chat</h1>
            <h1>{this.state.allMessages}</h1>
            <form onChange={this.onInputChange.bind(this)} onSubmit={this.sendSocket.bind(this)}>
				<input type="text" placeholder="Message" name="message" value={this.state.message} />               
                <button>Send Message</button>
            </form>
		</div>
	)
 }
}


export default Chat