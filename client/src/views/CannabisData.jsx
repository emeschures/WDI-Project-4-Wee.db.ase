import React from 'react'
import httpClient from '../httpClient.js'

class CannabisData extends React.Component {
  
  state = {
    cannabisData: []
  }
  
  componentDidMount() {
    httpClient.getCannabisData().then((serverResponse) => {
      console.log(serverResponse)
      this.setState({ cannabisData: serverResponse.data })
    })
  }
}


export default CannabisData

