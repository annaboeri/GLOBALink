import React from 'react'
import socketIOClient from 'socket.io-client'

class Chat extends React.Component {
    state = {
        endpoint: "http://localhost:3001",
        color: 'white'
    }

    send = () => {
        const socket = socketIOClient(this.state.endpoint)
        socket.emit('change color', this.state.color)
           
    }

    setColor = (color) => {
        this.setState({ color })
    }

    render(){
        const socket = socketIOClient(this.state.endpoint)
        socket.on('change color', (col) => {
            document.body.style.backgroundColor = col
        })
        return (
		<div className='Chat'>
			<h1>GLOBALink Chat</h1>
            <div style={{ textAlign: "center" }}>
                <button onClick={() => this.send()}>Change Color</button>

                <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
                <button id="pink" onClick={() => this.setColor('pink')}>Pink</button>
            </div>
		</div>
	)
 }
}


export default Chat