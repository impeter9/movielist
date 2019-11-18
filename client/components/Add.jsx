import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="add-bar" onSubmit={this.props.handleAddMovie}>
                <input type="text"/>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

export default Add;