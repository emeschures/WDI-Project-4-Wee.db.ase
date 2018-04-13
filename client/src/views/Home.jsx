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
					<Header as='h3' style={{ fontSize: '2em' }}>Products and How to Consume</Header>
					{/* <p style={{ fontSize: '1.33em' }}>
					Smoking | Vaping | Edibles | Topicals | Concentrates
					</p> */}
					<Header as='h3' style={{ fontSize: '2em' }}>The Plant</Header>
					{/* <p style={{ fontSize: '1.33em' }}>
				  	What is Cannabis | Parts of the Plant | Strains | Indica and Sativa
					</p> */}
					<Header as='h3' style={{ fontSize: '2em' }}>Cannabis and Your Body</Header>
					{/* <p style={{ fontSize: '1.33em' }}>
				  	How Indicas and Sativas Change Your High | Why THC Gets You High and CBD Doesn’t | THCA and THC: What’s the Difference?
					</p> */}
				</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
		{/* <Segment style={{ padding: '8em 0em' }} vertical>
			<Container text>
				<Header as='h3' style={{ fontSize: '2em' }}>High!</Header>
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
				<Header as='h3' style={{ fontSize: '2em' }}>Bake</Header>
				<p style={{ fontSize: '1.33em' }}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque omnis quos mollitia molestias beatae, sequi laborum repellendus quis harum ipsam recusandae accusamus modi ullam veritatis cum. Laboriosam aperiam ipsa incidunt.
				</p>
			</Container>
		</Segment> */}
	</div>
)
export default Home