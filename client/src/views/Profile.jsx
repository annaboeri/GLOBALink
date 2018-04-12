import React from 'react'
import httpClient from '../httpClient'

class Profile extends React.Component {
    state = {
		fields: { name: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.updateUser(this.state.fields, this.props.user._id).then((serverResponse) => {
            console.log('update user server response:', serverResponse.data.user.name)
            this.setState({ fields: { name: serverResponse.data.user.name} })
		})
    }
	
	render() {
		const { name } = this.state.fields
		return (
            <div className='Profile'>
                    <div className='EditProfile'>
                        <div className='row'>
                            <div className='column column-33 column-offset-33'>
                                <h1>Edit Username</h1>
                                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                                    <input type="text" placeholder={this.props.user.name} name="name" value={name} />
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}


export default Profile