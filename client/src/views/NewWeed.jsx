import React from 'react'
import { Form } from 'semantic-ui-react'
import httpClient from '../httpClient'

class NewWeed extends React.Component {
  state = {
      fields: {
          name: '',
          weedType: '',
          description: ''
      }
  }

  handleFormChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    })
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    
    
    httpClient.newWeed(this.state.fields).then((serverResponse) => {
      this.props.routeProps.history.push('/weed')
    })
} 

  render() {
    const { name, weedType, description} = this.state
      return (
          <div className="NewWeed">
            <h1>Add New Weed</h1>
              <Form onChange={this.handleFormChange.bind(this)} onSubmit={this.handleFormSubmit.bind(this)}>
                <Form.Group>
                  <Form.Input label="Name" type="text" placeholder="Name" name="name" value={name} />
                  <Form.Input label="WeedType" type="text" placeholder="WeedType" name="weedType" value={weedType} />
                  <Form.TextArea label="Description" type="text" placeholder="Description" name="description" value={description} />
                  <Form.Button>Add</Form.Button>
                </Form.Group>
              </Form>
          </div>
      )
  }
}

export default NewWeed