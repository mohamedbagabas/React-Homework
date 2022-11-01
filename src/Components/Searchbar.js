import React from "react";
import debounce from "lodash.debounce";



const AgentInput = ({ inputValue, handleInput }) => (
  <input
    className="common filter-search"
    type="text"
    placeholder="searchbox"
    value={inputValue}
    onChange={handleInput}
  />
);



class FilterSearch extends React.Component {
  state = {
    inputValue: "",
    currentSearch: "",
    suggestions: [],
    currentSuggestions: [],
    showSuggestions: false
  };

  constructor(props) {
    super(props);

    this.displaySuggestions = debounce(this.displaySuggestions, 500);
  }

  handleInputChange = evt => {
    this.setState({ inputValue: evt.target.value }, this.displaySuggestions);
  };

  handleSelectChange = evt => {
    const { value } = evt.target;

    const suggestions = this.getSuggestions(value);

    this.setState({ currentSearch: value, inputValue: "", suggestions });
  };

  getSuggestions = value => {
    let suggestions;

    

    if (value === "Course") {
      suggestions = [
        { id: 1, name: "JS" },
        { id: 2, name: "Python" },
        { id: 3, name: "Java" }
      ];
    }

    return suggestions;
  };

  displaySuggestions = () => {
    const { inputValue } = this.state;

    if (!inputValue) {
      this.setState({ showSuggestions: false });
    } else {
      this.setState(
        { showSuggestions: true },
        this.filterSuggestions(inputValue)
      );
    }
  };

  filterSuggestions = (inputValue = null) => {
    if (!inputValue) return;
    const normalizedInput = inputValue.toLowerCase();

    const currentSuggestions = this.state.suggestions.filter(({ name }) =>
      name.toLowerCase().includes(normalizedInput)
    );

    this.setState({ currentSuggestions });
  };

  handleSuggestionClick = evt => {
    const { id } = evt.target;

    const currentClicked = this.state.currentSuggestions.find(
      el => el.id === Number(id)
    ).name;

    this.setState({ showSuggestions: false, inputValue: currentClicked });
  };

  componentDidMount() {
    
    const suggestions = this.getSuggestions("Course");
    this.setState({ suggestions });
  }

  renderInput = () => {
    const { currentSearch, inputValue } = this.state;

    return currentSearch === "Course" ? (
      <AgentInput
        inputValue={inputValue}
        handleInput={this.handleInputChange}
      />
    ) : (
      <AgentInput
        inputValue={inputValue}
        handleInput={this.handleInputChange}
      />
    );
  };

  render() {
    const { showSuggestions, currentSuggestions } = this.state;

    return (
      <React.Fragment>
        <p className="common p" onChange={this.handleSelectChange}>
          <p value="Courses">Courses</p>
          
        </p>

        {this.renderInput()}

        
      </React.Fragment>
    );
  }
}

export default FilterSearch;
