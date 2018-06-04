import React from 'react'
import '../assets/User.css'

const User = (props) => {
  return (
    <div className={`user priority-${props.user.priority}`}>
      <h2 className="name">{props.user.name}</h2> 
      <span className="age">{props.user.age}</span> 
      <span className="category"> {props.user.category}</span>
    </div>
  )
}

export default User