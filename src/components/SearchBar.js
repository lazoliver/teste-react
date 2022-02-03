import React from "react";

class SearchBar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="content-search">
                <div className="search-form">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="video-search">Video Search</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange} name="video-search" type="text" placeholder="Search" />
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}

export default SearchBar;