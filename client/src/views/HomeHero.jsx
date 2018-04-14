import React from 'react'
import PropTypes from 'prop-types'
import { Container, Header } from 'semantic-ui-react' //Button, Icon

const HomepageHeading = ({ mobile }) => (
  <Container style={{ minHeight: 700, padding: '1em 0em' }} text>
    <Header
      as='h1'
      content="Wee.db.ase"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='The Weed DataBase & Forum'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)
HomepageHeading.propTypes = {
mobile: PropTypes.bool,
}

export default HomepageHeading