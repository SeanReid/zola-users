import React, { Component } from 'react';
import Users from './components/Users'
import data from './data/users.json'
import CategoryFilters from './components/CategoryFilters';
class App extends Component {
  constructor() {
    super()
    this.state = {users: data.data, categoryFilter: ''};
  }

  categoryFilter = (categoryFilter) => {
    this.setState({categoryFilter: categoryFilter})
  }

  sortBy = (key) => {
    this.setState({
      users: this.users.sort((a,b) => a[key] < b[key])
    })
  }
  
  render() {
    let filteredUsers = this.state.users.filter(u => u.category.includes(this.state.categoryFilter))
    //includes handles default '' vs === would require if block

    return (
      <div className="App">
        <CategoryFilters categories={this.state.users.map(u => u.category)} categoryFilter={this.categoryFilter}/>
        <Users users={filteredUsers}/>
      </div>
    )
  }
}

export default App
