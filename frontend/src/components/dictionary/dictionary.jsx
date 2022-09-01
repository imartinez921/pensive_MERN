import React from "react";
import DictionaryWindow from "./definition_window";

class Dictionary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '', 
    };

    this.handleDefine = this.handleDefine.bind(this);
    this.handleThesaurus = this.handleThesaurus.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    // this.props.defineWord(this.state.query);
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.query !== this.state.query) {
    //   this.props.defineWord(this.state.query);
    // }
  }

  handleInput (field) {
    return (e) => {
        this.setState({ [field]: e.target.value })
    };
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.handleDefine(event);
    }
  }

  handleClear (e) {
    e.preventDefault();
    this.setState({ query: ''});
    this.props.resetQueries();
  }

  handleDefine (e) {
    e.preventDefault();
    let query = this.state.query;
    if (query === query.toUpperCase()) {
      query = query.toLowerCase();
    }

    this.props.defineWord(query);
  }

  handleThesaurus (e) {
    e.preventDefault();
    let query = this.state.query;
    if (query === query.toUpperCase()) {
      query = query.toLowerCase();
    }

    this.props.synWord(query);
    // this.props.fetchAntonyms(query);
  }


  render() {
    console.log('DICTIONARY HAS RENDERED')

    const {queries,
      definitions,
      errors,
      synonyms,
      antonyms,
      lastQuery,
    } = this.props;

    const wordUrl = 'https://www.wordnik.com/words/' + `${lastQuery}`
    console.log('wordUrl', wordUrl)

    const dictionaryForm = (
      <form>
        <p /><label>Lookup a word
          <p /><input 
            type="text" 
            placeholder="Lookup  a word"
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
          <button onClick={this.handleDefine}>Define</button>
          <button onClick={this.handleThesaurus}>Thesaurus</button>
          <button onClick={this.handleClear}>Clear history</button>
        </div>
        <div>
          <DictionaryWindow errors={errors} wordUrl={wordUrl} queries={queries} definitions={definitions} synonyms={synonyms} anytonyms={antonyms} />
        </div>
      </div>
    )
  }
}

export default Dictionary;