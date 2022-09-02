import React from "react";
import DictionaryWindow from "./dictionary_window";
import '../../assets/css/08-dictionary.css'

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
    this.handlePrevQuery = this.handlePrevQuery.bind(this);
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

  handlePrevQuery (e) {
    console.log(e.target.value)
    e.preventDefault();
    this.setState({ query: `${e.target.value}`});
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

    const dictionaryForm = (
      <div>
      <form className="dictionary-form">
        <p>Find new meanings</p>
        <input 
            type="text" 
            placeholder="Lookup a word"
            value={this.state.query} 
            onChange={this.handleInput('query')}
            onKeyPress={this.handleKeyPress}
          />
      </form>
      </div>
    )

    return (
      <div className="dictionary">
        {dictionaryForm}
        <div className="dict-buttons">
          <button onClick={this.handleDefine}>Define</button>
          <button onClick={this.handleThesaurus}>Thesaurus</button>
          <button onClick={this.handleClear}>Clear history</button>
        </div>
          <DictionaryWindow errors={errors} handlePrevQuery={this.handlePrevQuery} wordUrl={wordUrl} queries={queries} definitions={definitions} synonyms={synonyms} anytonyms={antonyms} />
      </div>
    )
  }
}

export default Dictionary;