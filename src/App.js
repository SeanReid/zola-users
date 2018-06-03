import React, { Component } from 'react'
import Users from './components/Users'
import data from './data/users.json'

class App extends Component {
  constructor() {
    super()
    this.state = {users: data.data};
  }

  sortBy = (key) => {
    this.setState({
      data: data.sort((a,b) => a < b)
    })
  }

  render() {
    return (
      <div className="App">
        <Users users={this.state.users}/>
      </div>
    )
  }
}

export default App
