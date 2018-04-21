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
					<p style={{ fontSize: '1.33em' }}>
						<a href="https://en.wikipedia.org/wiki/Cannabis_smoking" target="_blank">Smoking</a> | 
						<a href="https://en.wikipedia.org/wiki/Vaporizer_(inhalation_device)#Marijuana_vaporizers" target="_blank"> Vaping</a> | 
						<a href="https://en.wikipedia.org/wiki/Cannabis_edible" target="_blank"> Edibles</a> | 
						<a href="https://weedmaps.com/learn/products-and-how-to-consume/alternative-cannabis-products/" target="_blank"> Topicals</a> | 
						<a href="https://en.wikipedia.org/wiki/Cannabis_concentrate" target="_blank"> Concentrates</a>
					</p>
					<Header as='h3' style={{ fontSize: '2em' }}>The Plant</Header>
					<p style={{ fontSize: '1.33em' }}>
				  	<a href="https://en.wikipedia.org/wiki/Cannabis" target="_blank">What is Cannabis</a> | 
						<a href="https://www.findclearchoice.com/cannabis-anatomy/" target="_blank"> Parts of the Plant</a> | 
						<a href="https://en.wikipedia.org/wiki/Cannabis_strains" target="_blank"> Strains</a> | 
						<a href="https://en.wikipedia.org/wiki/Cannabis_strains" target="_blank"> Indica</a> and <a href="https://en.wikipedia.org/wiki/Cannabis_sativa" target="_blank">Sativa</a>
					</p>
					<Header as='h3' style={{ fontSize: '2em' }}>Cannabis and Your Body</Header>
					<p style={{ fontSize: '1.33em' }}>
				  		How Indicas and Sativas Change Your High | Why THC Gets You High and CBD Doesn’t | THCA and THC: What’s the Difference?
					</p>
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