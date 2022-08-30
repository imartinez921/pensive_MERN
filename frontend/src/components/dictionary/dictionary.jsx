import React from "react";

class Dictionary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'bluebird',
    };
  }

  componentDidMount() {
    debugger
    this.props.lookupWord(this.state.query);
  }

  componentDidUpdate(newState) {
    // this.setState({ tweets: newState.tweets });
  }

  render() {
    return console.log('I HAVE RENDERED')
  }
}

export default Dictionary;