import React from 'react';

const Sort = (props) => {
  const onChangeHandler = (event) => {
    props.sortBy(event.target.value)
  }

  return (
    <React.Fragment>
      <label htmlFor="categoryfilter">Sorts: </label>
      <select name="categoryfilter" id="categoryfilter" onChange={onChangeHandler}>
        <option key="featured" value="">Featured</option>
        <option key="name" value="name">A - Z</option>
        <option key="priority" value="priority">Priority</option>
      </select>
    </React.Fragment>
  )
}

export default Sort;