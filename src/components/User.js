import React from 'react'

const User = (props) => {
    return (<div>{props.user.name} | {props.user.age} | {props.user.priority} | {props.user.category}</div>)
}

export default User