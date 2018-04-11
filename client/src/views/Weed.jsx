import React from 'react'
import httpClient from '../httpClient'

class Weed extends React.Component {

  state = { weed: [] }
  
  componentDidMount() {
    httpClient.getWeed().then((serverResponse) => {
      this.setState({ weed: serverResponse.data })
    })
  }

  render() {
    const { weed } = this.state
    return (
      <div className="weed">
       <h1>Newest Strains</h1>
        <h3>
          {weed.map((w) => {
            return (
            <ul>
              <li key={w._id}>{w.name}</li>
              <li>{w.strain}</li>
              <li>{w.description}</li>
            </ul>
            )
          })}
        </h3>
      </div>
    )
  }
}

export default Weed