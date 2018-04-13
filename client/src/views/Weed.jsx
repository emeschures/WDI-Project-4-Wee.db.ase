import React from 'react'
import { Link } from 'react-router-dom'
import httpClient from '../httpClient'
import { Container, Header, Button, Divider, Segment, Form } from 'semantic-ui-react'

class Weed extends React.Component {

  state = { weed: [], 
            fields: {
              body: ''
            }
          }

  
  componentDidMount() {
    httpClient.getWeed().then((serverResponse) => {
      this.setState({ weed: serverResponse.data })
    })
  }

  handleOnWeedClick() {
    this.props.routeProps.history.push('/newweed')
  }

  onCommentSubmit(evt) {
    evt.preventDefault()
		httpClient.postComment(this.props.routeProps.match.params.id, this.state.fields).then((serverResponse) => {
      this.props.routeProps.history.push('/weed')
    })
  }
  
  handleInputChange(evt){
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    })
  }

  render() {
    const { weed } = this.state
    const body = this.state.fields.body
    return (
      <div className="weed">
     
      <Container>
       <Header as='h1' textAlign='center'>Newest Strains</Header>
       <Segment>
        <Divider clearing />

          {weed.map((w) => {
            return (
            <div>
              <Link to={`/weed/${w._id}`}><Header as='h2' key={w._id} className="weedName">{w.name}</Header></Link>            
              <Header as='h4'className="weedType">Type: {w.weedType}</Header>
                <p>{w.description}</p>
                <hr />
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