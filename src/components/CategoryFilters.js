import React from 'react';

const CategoryFilters = (props) => {
  const onChangeHandler = (event) => {
    props.categoryFilter(event.target.value)
  }

  let uniqueCategories = [...new Set(props.categories)].sort();
  let options = uniqueCategories.map((category, index) => {
    return (  
      <label key={index+1} htmlFor={`filterChoice${index+1}`}>
        <input type="radio" id={`filterChoice${index}`} name="filter" value={category}/>{category}
      </label>
    )
  });

  return (
    <div className="radio-filters" onChange={onChangeHandler}>
      <label htmlFor="categories"> Categories: </label>
      <label key="0" htmlFor="filterChoice0">
        <input type="radio" id="filterChoice0" name="filter" value="" defaultChecked/>All
      </label>
      {options}
    </div>
  )
}

export default CategoryFilters;