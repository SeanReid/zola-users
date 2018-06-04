import React from 'react';

const Sort = (props) => {
    const onChangeHandler = (event) => {
        props.sortBy(event.target.value)
    }

    return (
        <React.Fragment>
            <label htmlFor="sort">Filters: </label>
            <select name="sort" id="sort" onChange={onChangeHandler}>
                <option key="0" value="">Featured</option>
                <option key="1" value="name">A - Z</option>
                <option key="2" value="priority">Priority</option>
            </select>
        </React.Fragment>
    )
}

export default Sort;