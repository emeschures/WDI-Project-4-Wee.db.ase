import React from 'react';
// import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import httpClient from './httpClient'

// import { Grid, Header, List } from 'semantic-ui-react'

import {
  Container,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'

import NavBar from './NavBar'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'
import About from './views/About'
// import Contact from './views/Contact'
import SignUp from './views/SignUp'
import Home from './views/Home'
import HomeHero from './views/HomeHero'
import NewWeed from './views/NewWeed'
import Profile from './views/Profile'
import Weed from './views/Weed'
import EditProfile from './views/EditProfile'
import Comments from './views/Comments'


class App extends React.Component {
    state = { currentUser: httpClient.getCurrentUser() }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    onLoginSuccess(user) {
      this.setState({ currentUser: httpClient.getCurrentUser() })
    }
  
    logOut() {
      httpClient.logOut()
      this.setState({ currentUser: null })
    }   
  
    render() {
      const { currentUser, fixed } = this.state
      return (
          <Responsive className="App">
            <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
              <Segment inverted textAlign='center' vertical>
                <NavBar currentUser={currentUser} fixed={fixed} />
                <Route exact path="/" component={HomeHero} />
              </Segment>
              
              <Container style={{ paddingTop: '3em' }}>
                <Switch>

                  <Route path="/login" render={(props) => {
                    return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
                  }} />
                  
                  <Route path="/logout" render={(props) => {
                    return <LogOut onLogOut={this.logOut.bind(this)} />
                  }} />
                  
                  <Route path="/signup" render={(props) => {
                    return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
                  }} />

                  <Route path="/weed/:id" render={(props) => {
                    return <Comments currentUser={this.state.currentUser} {...props} />
                  }} />

                  <Route path="/newWeed" render={(routeProps) => {
                    return currentUser
                    ? <NewWeed currentUser={currentUser} routeProps={routeProps} />
                    : <Redirect to="/login" />
                  }} />

                  <Route path="/profile" render={(routeProps) =>{
                    return <Profile currentUser={currentUser} routeProps={routeProps} />
                  }} />

                  <Route path="/editprofile" render={(routeProps) => {
                    return <EditProfile currentUser={currentUser} onUpdateProfileSuccess={this.onLoginSuccess.bind(this)}  routeProps={routeProps} />
                  }} />
                  
                  <Route path="/about" component={About} />

                  <Route path="/weed" render={(routeProps) => {
                    return <Weed currentUser={currentUser} routeProps={routeProps} />
                  }} />
                  
                  <Route path="/" component={Home} />
                  
                </Switch>

              </Container>
              
              {/* FOOTER */}
              {/* <Segment inverted vertical style={{ padding: '5em 7em', position: 'fixed', bottom: 0, width: '100%' }}>
                <Grid divided inverted stackable>
                  <Grid.Row>
                    <Grid.Column width={3}>
                    <Header inverted as='h4' content='About' />
                    <List link inverted>
                      <List.Item as='a'>About Us</List.Item>
                      <List.Item as='a'>Contact Us</List.Item>
                    </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                    <Header as='h4' inverted>Wee.db.ase</Header>
                    <p>Go green.</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment> */}
              {/* END FOOTER */}
            </Visibility>
          </Responsive>
        );
      }
    }

export default App;
