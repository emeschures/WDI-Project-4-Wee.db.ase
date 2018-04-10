import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import httpClient from '../httpClient'

class NewWeed extends React.Component {
    render() {
        return (
            <div className="NewWeed">
              <h1>Add New Items</h1>
                <Form>
                  <Form.Group>
                    <Form.Input label="Name" type="text" placeholder="Name" name="name" />
                    <Form.Input label="Strain" type="text" placeholder="Strain" name="strain" />
                    <Form.Input label="Name" type="text" placeholder="Name" name="name" />
                    <Button>Add</Button>
                  </Form.Group>
                </Form>
            </div>
        )
    }
}

export default NewWeed