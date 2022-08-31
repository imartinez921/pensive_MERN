import React from "react";

class Dictionary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'bluebird', 
    };
  }

  componentDidMount() {
    this.props.lookupWord(this.state.query);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.props.lookupWord(this.state.query);
    }
  }

  render() {
    console.log('DICTIONARY HAS RENDERED')
    return 
  }
}

export default Dictionary;