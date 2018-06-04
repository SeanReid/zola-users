import React, { Component } from 'react';
import Users from './components/Users'
import data from './data/users.json'
import CategoryFilters from './components/CategoryFilters';
import Sort from './components/Sort';

class App extends Component {
  constructor() {
    super()
    this.state = {users: data.data, categoryFilter: '', initialUsers: Object.assign([], data.data)};
    //copying data.data to maintain initial order rather than cheat and ref pseudo api call data.data
  }

  categoryFilter = (categoryFilter) => {
    this.setState({categoryFilter: categoryFilter})
  }

  sortBy = (key) => {
    this.setState({
      users: key ? this.state.users.sort((a,b) => a[key] > b[key]) : Object.assign([], this.state.initialUsers)
    })
  }
  
  render() {
    let filteredUsers = this.state.users.filter(u => u.category.includes(this.state.categoryFilter))
    //includes handles default '' vs === would require if block

    return (
      <div className="App">
        <CategoryFilters categories={this.state.users.map(u => u.category)} categoryFilter={this.categoryFilter}/>
        <Sort sortBy={this.sortBy}/>
        <Users users={filteredUsers}/>
      </div>
    )
  }
}

export default App
