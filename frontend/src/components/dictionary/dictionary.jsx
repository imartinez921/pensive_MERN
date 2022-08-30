import React from "react";
// import { fetchDefinitions } from "../../util/dictionary_api_util";

class Dictionary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        query: 'bluebird',
    };
  }

  componentWillMount() {
    this.props.fetchDefinitions(this.state.query);
  }

  componentWillReceiveProps(newState) {
    // this.setState({ tweets: newState.tweets });
  }

  render() {
    return console.log('I HAVE RENDERED')
  }
}

export default Dictionary;