import React from 'react';
import DictionaryContainer from '../dictionary/dictionary_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Book Editor</h1>
        <DictionaryContainer />
        <footer>
          Mern Project
        </footer>
      </div>
    );
  }
}

export default MainPage;