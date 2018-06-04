import React from 'react';

class CategoryFilters extends React.Component {
    constructor(props) {
        super(props);
    }

    onChangeHandler = (event) => {
        this.props.categoryFilter(event.target.value)
    }

    render () {
        let uniqueCategories = [...new Set(this.props.categories)].sort();
        let options = uniqueCategories.map((category) =>
                <option key={category} value={category}>{category}</option>
            );

        return (
            <React.Fragment>
                <label htmlFor="categoryfilter">Categories: </label>
                <select name="categoryfilter" id="categoryfilter" onChange={this.onChangeHandler}>
                    <option key="0" value="">All</option>
                    {options}
                </select>
            </React.Fragment>
        )
    }
}

export default CategoryFilters;