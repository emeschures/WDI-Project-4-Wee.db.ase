import React from 'react'
// import { Redirect } from 'react-router-dom'
import httpClient from '../httpClient'
import { Container, Header, Button, Divider, Segment, Form } from 'semantic-ui-react'

class Weed extends React.Component {

  state = { weed: [] }
  
  componentDidMount() {
    httpClient.getWeed().then((serverResponse) => {
      this.setState({ weed: serverResponse.data })
    })
  }

  handleOnWeedClick() {
    this.props.routeProps.history.push('/newweed')
  }

  onCommentSubmit(evt) {
		// evt.preventDefault()
		// httpClient.signUp(this.state.fields).then(user => {
		// 	this.setState({ fields: { name: '', email: '', password: '' } })
		// 	if(user) {
		// 		this.props.onSignUpSuccess(user)
		// 		this.props.history.push('/weed')
		// 	}
		// })
	}

  render() {
    const { weed } = this.state
    return (
      <div className="weed">
     
      <Container>
       <Header as='h1' textAlign='center'>Newest Strains</Header>
       <Segment>
        <Divider clearing />

          {weed.map((w) => {
            return (
            <div>
              <Header as='h2' key={w._id} className="weedName">{w.name}</Header>              
              <Header as='h4'className="weedType">Type: {w.weedType}</Header>
                <p>{w.description}</p>
                  <hr />
                  <Form reply>
                    <Form.TextArea />
                    <Button onSubmit={this.onCommentSubmit.bind(this)} content='Add Comment' labelPosition='left' icon='edit' size='mini' />
                  </Form>
                  <hr />
            </div>
            )
          })}
      </Segment>
     </Container>
      
        <Button onClick={this.handleOnWeedClick.bind(this)}>Add Weed</Button>

      </div>
    )
  }
}

export default Weed