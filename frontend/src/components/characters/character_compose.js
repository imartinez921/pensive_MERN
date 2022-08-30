import React from "react";


class CharacterCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      sex: "",
      height: "",
      weight: "",
      species: "",
      description:"",
      newCharacter: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      // title: nextProps.newCharacter.title,
      // editor: nextProps.newCharacter.editor,
      // genre: nextProps.newCharacter.genre,
      // description: nextProps.newCharacter.description,
      errors: nextProps.errors});
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    let character = {
      name: this.state.name,
      age: this.state.age,
      sex: this.state.sex,
      height: this.state.height,
      weight: this.state.weight,
      species: this.state.species,
      description: this.state.description
    };

    this.props.composeCharacter(character);
    this.setState({ name: "", age: "", sex: "", height: "", weight: "", species: "", description: "" });
//     if (!this.state.errors)
//     { this.props.history.push(`/profile`) };
  }

  update(property) {
    return (e) =>
      this.setState({
        [property]: e.currentTarget.value,
      });
  };
  
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="textarea"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Input the name"
            />
            <br />
            <input type="textarea"
              value={this.state.age}
              onChange={this.update("age")}
              placeholder="Input your age" />
            <br />
            <input type="textarea"
              value={this.state.sex}
              onChange={this.update("sex")}
              placeholder="Input your sex" />
            <br />
            <input type="textarea"
              value={this.state.height}
              onChange={this.update("height")}
              placeholder="Input your height" />
            <br />
            <input type="textarea"
              value={this.state.weight}
              onChange={this.update("weight")}
              placeholder="Input your weight" />
            <br />
            <input type="textarea"
              value={this.state.species}
              onChange={this.update("species")}
              placeholder="Input your species" />
            <br />
            <input type="textarea"
              value={this.state.description}
              onChange={this.update("description")}
              placeholder="Character's description" />
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default CharacterCompose;