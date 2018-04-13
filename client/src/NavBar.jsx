import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Button, } from 'semantic-ui-react'

const NavBar = (props) => {
  const { fixed } = props
	return (
		<div className='NavBar'>
      <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
      >
        <Container>
          <Link to="/"><Menu.Item as='a' active>Home</Menu.Item></Link>
          {props.currentUser
            ? (
              <Menu.Item position='right'>
                <Link to="/weed"><Button as='a'>Forum</Button></Link>
                <Link to="/logout"><Button as='a'>Log Out</Button></Link>
                <Link to="/profile"><Button as='a'>Profile</Button></Link>
              </Menu.Item>
            )
            : (
              <Menu.Item position='right'>
                <Link to="login">
                <Button as='a' inverted={!fixed}>Log in</Button></Link>
                <Link to="signup"><Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button></Link>
              </Menu.Item>
            )
          }
        </Container>
      </Menu>
		</div>
	)
}

export default NavBar