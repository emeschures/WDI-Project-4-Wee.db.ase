import React from 'react'
import httpClient from '../httpClient'
import { Link } from 'react-router-dom'
import { Container, Header, Button, Divider, Segment, Form } from 'semantic-ui-react'


class Comments extends React.Component {

	state = { 
		thatWeed:{},
		commments:[]
	}
  
    componentDidMount() {
      httpClient.showWeed(this.props.match.params.id).then((serverResponse) => {
				console.log(serverResponse)
        this.setState({ 
					thatWeed: serverResponse.data 
				})
      })
    }

  
    onCommentSubmit(evt) {
      evt.preventDefault()
          httpClient.postComment(this.props.routeProps.match.params.id, this.state.fields).then((serverResponse) => {
        this.props.routeProps.history.push('/weed')
      })
    }
    
    handleInputChange(evt){
      this.setState({
        fields: {
          ...this.state.fields,
          [evt.target.name]: evt.target.value
        }
      })
    }
  
    render() {
			const { thatWeed } = this.state
     console.log(this.props.match.params.id)
      return (
        <div className="weed">
       
        <Container>

         <Header as='h1' textAlign='center'>{this.state.thatWeed.name}</Header>
         <Segment>
          <Divider clearing />
							<div>            
                 <Header as='h4'className="weedType">Type: {thatWeed.weedType}</Header>
                   <p>{thatWeed.description}</p>
               </div>
 							
								
							<Form  reply>
								<Form.TextArea name='comments' />
								<Button content='Add Comment' labelPosition='left' icon='edit' size='mini' />
							</Form>

								{this.state.comments.map((c) => {
									return (
										<div>
											{c}
										</div>
									)
								})}
         
        </Segment>
       </Container>
            
 
  
        </div>
      )
    }
  }
  
	



  export default Comments