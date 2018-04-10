import React from 'react'
import httpClient from '../httpClient'

class Profile extends React.Component {
    state = {
		fields: { name: '', email: ''}
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
		httpClient.updateUser(this.state.fields, this.props.user._id).then(user => {
			this.setState({ fields: { name: '', email: '' } })
		})
    }
	
	render() {
		const { name, email } = this.state.fields
		return (
            <div className='Profile'>
                <h1>GLOBALink Profile</h1>
                    <div className='EditProfile'>
                        <div className='row'>
                            <div className='column column-33 column-offset-33'>
                                <h1>Edit Profile</h1>
                                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                                    <input type="text" placeholder={this.props.user.name} name="name" value={name} />
                                    <input type="text" placeholder={this.props.user.email} name="email" value={email} />
                                    <button>Edit Profile</button>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}


export default Profile