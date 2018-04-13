import React from 'react'
import httpClient from '../httpClient'
import { Form, Button } from 'semantic-ui-react'

class EditProfile extends React.Component {

	state = { 
		fields: ''
	}

	componentDidMount() {
		httpClient.getUser(this.props.currentUser._id).then((serverResponse) => {
			console.log(serverResponse)
			this.setState({
				fields: serverResponse.data
			})
		})
	}

	handleUpdateClick(evt) {
		evt.preventDefault()
		httpClient.editProfile(this.props.currentUser._id, this.state.fields).then((serverResponse) => {
			console.log(serverResponse.data)
			// this.setState({
			// 	fields: serverResponse.data.user
			// })
			// this.props.routeProps.history.push('/profile')		
		})
	}

	handleFormChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    })
  }

	render() {
		const {fields} = this.state
        return (
            <div className="editprofile">
							<h1>Edit Profile</h1>
								<Form onChange={this.handleFormChange.bind(this)} onSubmit={this.handleUpdateClick.bind(this)} >
									<Form.Group widths='equal'>
											
										<Form.Input label="Name" type="text" placeholder="Name" name="name" value={fields.name} />
										<Form.Input label="Email" type="text" placeholder="Email" name="email" value={fields.email} />
										<Form.Input label="Password" type="password" placeholder="Password" name="password" />

										<Button>Update</Button>
										
									</Form.Group>
								</Form>
            </div>
        )
    }
}

export default EditProfile

