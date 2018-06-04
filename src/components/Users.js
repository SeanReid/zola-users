import React from 'react'
import User from './User'
import '../assets/Users.css'

const Users = (props) => {
    let users;
    
    if (props.users) {
        users = props.users.map((user, index) => {
            return <User key={user.name} user={user}></User>
            //using name as key rather than index as the list order changes and names are currently unique
        })
    }

    return (
        <div className="users">{users}</div>
    )
}

export default Users