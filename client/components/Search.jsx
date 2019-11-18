import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="search-bar" onSubmit={this.props.handleSearchChange}>
                <input type="text"/>
                <input type="submit" value="Search"/>
            </form>
        );
    }
}

export default Search;