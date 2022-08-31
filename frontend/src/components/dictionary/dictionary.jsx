import React from "react";

class Dictionary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '', 
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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

  handleSubmit (e) {
    e.preventDefault();

    this.props.lookupWord(this.state.query);
    }


  render() {
    console.log('DICTIONARY HAS RENDERED')

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
        </div>
      </div>
    )
  }
}

export default Dictionary;