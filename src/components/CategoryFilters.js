import React from 'react';

const CategoryFilters = (props) => {
    const onChangeHandler = (event) => {
        props.categoryFilter(event.target.value)
    }

    let uniqueCategories = [...new Set(props.categories)].sort();
    let options = uniqueCategories.map((category) =>
            <option key={category} value={category}>{category}</option>
        );

    return (
        <React.Fragment>
            <label htmlFor="categoryfilter">Categories: </label>
            <select name="categoryfilter" id="categoryfilter" onChange={onChangeHandler}>
                <option key="0" value="">All</option>
                {options}
            </select>
        </React.Fragment>
    )
}

export default CategoryFilters;