import React from 'react'
import '../assets/User.css'

const User = (props) => {
  console.log(props.user.name)
  return (
    <div className={`user priority-${props.user.priority}`}>
      <h2 className="name">{props.user.name}</h2> 
      <span className="age">{props.user.age}</span>
    </div>
  )
}

export default User