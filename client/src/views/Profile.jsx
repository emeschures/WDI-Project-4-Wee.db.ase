import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { Card, Icon } from 'semantic-ui-react'

const Profile = (props) => {
  <div>
  <Card>
  <Image src='https://react.semantic-ui.com/assets/images/avatar/large/rachel.png' />
    <Card.Content>
      <Card.Header>
        {props.user.name}
      </Card.Header>       
       <Card.Meta>
        <span>
          {props.user.email}
        </span>
      </Card.Meta>
    </Card.Content>
  </Card>
  </div>
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