import React from "react";
class SearchBar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value,
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search">
                <div className="search-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="search-label">
                            <label htmlFor="video-search">Find on YouTube</label>
                        </div>
                        <div className="search-input">
                            <input onChange={this.handleChange} name="video-search" type="text" placeholder="Search" />
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}

export default SearchBar;