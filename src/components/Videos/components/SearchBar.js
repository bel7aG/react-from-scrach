import React, { PureComponent } from "react";

class SearchBar extends PureComponent {
  state = {
    term: ""
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
    console.log(this.state.term);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { handleFormSubmit } = this.props;
    const { term } = this.state;
    handleFormSubmit(term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label htmlFor="term">Video Search</label>
            <input
              type="text"
              name="term"
              value={this.state.term}
              onChange={this.handleChange}
            />
            <h1>{this.state.searchBar}</h1>
          </div>
          <div className="two ui large buttons buttonk-">
            <button className="ui green basic button" type="submit">
              Search
            </button>
            <div className="or" />
            <button
              className="ui red basic button active"
              type="button"
              onClick={() => {
                this.setState({
                  term: ""
                });
              }}
            >
              Two
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
