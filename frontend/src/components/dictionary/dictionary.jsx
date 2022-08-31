import React from "react";
import DefinitionWindow from "./definition_window";

class Dictionary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '', 
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    // this.props.lookupWord(this.state.query);
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.query !== this.state.query) {
    //   this.props.lookupWord(this.state.query);
    // }
  }

  handleInput (field) {
    return (e) => {
        this.setState({ [field]: e.target.value })
    };
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.handleSubmit(event);
    }
  }

  handleClear (e) {
    e.preventDefault();
    this.props.resetQueries();
  }

  handleSubmit (e) {
    e.preventDefault();
    let query = this.state.query;
    if (query === query.toUpperCase()) {
      query = query.toLowerCase();
    }

    this.props.lookupWord(query);
    }


  render() {
    console.log('DICTIONARY HAS RENDERED')

    const {queries,
      definitions,
    } = this.props;

    const dictionaryForm = (
      <form>
        <p /><label>Define a word
          <p /><input 
            type="text" 
            placeholder="Define a word"
            value={this.state.query} 
            onChange={this.handleInput('query')}
            onKeyPress={this.handleKeyPress}
          />
        </label>
      </form>
    )

    return (
      <div>
        <div>
          {dictionaryForm}
          <button onClick={this.handleSubmit}>Define</button>
          <button onClick={this.handleClear}>Clear history</button>
        </div>
        <div>
          <DefinitionWindow queries={queries} definitions={definitions} />
        </div>
      </div>
    )
  }
}

export default Dictionary;