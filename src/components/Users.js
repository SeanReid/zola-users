import React from 'react'
import User from './User'
import '../assets/Users.css'

const Users = (props) => {
    let users;
    
    if (props.users) {
        users = props.users.map((user, index) => {
            return <User key={index} user={user}></User>;
        })
    }

    return (
        <div className="users">{users}</div>
    )
}

export default Users