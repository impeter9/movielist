import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="add-bar" onSubmit={this.props.handleAddMovie}>
                <input type="text" placeholder="Add movie title here"/>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

export default Add;