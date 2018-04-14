import React from 'react'
import httpClient from '../httpClient'
import { Card, Icon, Image } from 'semantic-ui-react'
import profileImage from '../images/profileimage.jpg'

class Profile extends React.Component {

  state = {user: null}

  componentDidMount(){
    console.log(this.props)
  }

  handleEditProfileClick() {
    this.props.routeProps.history.push('/editprofile')

  }
    
  render() {
    const currentUser = this.props.currentUser
    return (
      <Card centered>
      <Image src={profileImage} alt={currentUser.name} />
        <Card.Content>
          <Card.Header>
            {currentUser.name}
          </Card.Header>
          <Card.Description>
            {currentUser.email}
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <a onClick={this.handleEditProfileClick.bind(this)}>
            <Icon name='user' />
              Edit 
          </a>
        </Card.Content>
      </Card>
    )
  }
}
 
export default Profile
