import React from 'react'
import httpClient from '../httpClient'
import { Form } from 'semantic-ui-react'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: ''}
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
		httpClient.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { name, email, password } = this.state.fields
		return (
			<div className='SignUp'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1>Sign Up</h1>
                            <Form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                                <Form.Group widths='equal'>
                                    
                                    <Form.Input fluid label="Name" placeholder="Name" value={name} />
                                    <Form.Input fluid label="Email" placeholder="Email" name="email" value={email} />
                                    <Form.Input fluid label="Password" placeholder="Password" value={password} />
                                    <Form.Button>Sign Up</Form.Button>
                                    
                                </Form.Group>
                            </Form>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp