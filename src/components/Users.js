import React, {Component} from 'react'
import User from './User'
import '../assets/Users.css'

class Users extends Component {
    render() {
        let users;
        
        if (this.props.users) {
            users = this.props.users.map((user, index) => {
                return <User key={index} user={user}></User>;
            })
        }

        return (
            <div className="users">{users}
            </div>
        )
    }
}

export default Users