import React from 'react'
import httpClient from '../httpClient'
// import { Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'
import profileImage from '../images/profileimage.jpg'

class Profile extends React.Component {

  state = {user: null}

  componentDidMount(){
    console.log(this.props)
    // httpClient.getUser(this.routeProps.match.params.id).then((serverResponse) => {
    //   console.log(serverResponse.data)
    //   this.setState({
    //     user: serverResponse.data
    //   })
    // })
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

  // <Modal className="profile" trigger={<Button>Edit User</Button>}>
  //   <Modal.Header>Select a Photo</Modal.Header>
  //   <Modal.Content image>
  //     <Image wrapped size='medium' src='https://react.semantic-ui.com/assets/images/avatar/large/rachel.png' />
  //     <Modal.Description>
  //       <Header>Default Profile Image</Header>
  //       <p>We've found the following gravatar image associated with your e-mail address.</p>
  //       <p>Is it okay to use this photo?</p>
  //     </Modal.Description>
  //   </Modal.Content>
  // </Modal>