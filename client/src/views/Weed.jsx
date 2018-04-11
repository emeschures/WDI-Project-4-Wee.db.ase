import React from 'react'
// import { Redirect } from 'react-router-dom'
import httpClient from '../httpClient'
import { Container, Header, Segment, Button } from 'semantic-ui-react'

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

  render() {
    const { weed } = this.state
    return (
      <div className="weed">
     
      <Container>
       <Header as='h1' textAlign='center'>Newest Strains</Header>
        
          {weed.map((w) => {
            return (
            <div>
              <Header as='h3' key={w._id} className="weedName">{w.name}</Header>
              <Header as='h4'className="weedType">Type: {w.weedType}</Header>
              <p>{w.description}</p>
            </div>
            )
          })}
        
        </Container>
      
          <Button onClick={this.handleOnWeedClick.bind(this)}>Add Weed</Button>
      </div>
    )
  }
}

export default Weed