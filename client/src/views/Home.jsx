import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Segment
} from 'semantic-ui-react'

const Home = () => (
	<div className="Home">
		<Segment style={{ padding: '8em 0em' }} vertical>
			<Grid container stackable verticalAlign='middle'>
				<Grid.Row>
				<Grid.Column width={8}>
					<Header as='h3' style={{ fontSize: '2em' }}>We're Only Human</Header>
					<p style={{ fontSize: '1.33em' }}>
					We tend to forget things, but with Weed.io, you can easily keep track of all your past herbal remedies.
					</p>
					<Header as='h3' style={{ fontSize: '2em' }}>How It Works</Header>
					<p style={{ fontSize: '1.33em' }}>
				  After you sign up, create a list and add some information about your latest endevors.
          What strains have you tried? 
          Any edibles you enjoyed?
          How much did you buy and how much did it cost?
					</p>
				</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
		<Segment style={{ padding: '8em 0em' }} vertical>
			<Container text>
				<Header as='h3' style={{ fontSize: '2em' }}>Placeholder</Header>
				<p style={{ fontSize: '1.33em' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat suscipit ut dolore iste quo repudiandae quam rerum labore laboriosam dicta esse quas deserunt, adipisci atque libero accusantium quos sequi eos!
				</p>
				<Divider
				as='h4'
				className='header'
				horizontal
				style={{ margin: '3em 0em', textTransform: 'uppercase' }}
				>
				</Divider>
				<Header as='h3' style={{ fontSize: '2em' }}>Placeholder 2</Header>
				<p style={{ fontSize: '1.33em' }}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque omnis quos mollitia molestias beatae, sequi laborum repellendus quis harum ipsam recusandae accusamus modi ullam veritatis cum. Laboriosam aperiam ipsa incidunt.
				</p>
			</Container>
		</Segment>
	</div>
)
export default Home