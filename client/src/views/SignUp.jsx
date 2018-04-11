import React from 'react'
import httpClient from '../httpClient'
import { Form, Button } from 'semantic-ui-react'

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
                    
                  <Form.Input autoComplete="signup-name" label="Name" type="text" placeholder="Name" name="name" value={name} />
                  <Form.Input autoComplete="signup-email" label="Email" type="text" placeholder="Email" name="email" value={email} />
                  <Form.Input autoComplete="signup-password" label="Password" type="password" placeholder="Password" name="password" value={password} />
                  <Button>Sign Up</Button>
                  
                </Form.Group>
              </Form>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp