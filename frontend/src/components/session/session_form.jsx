import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

//   componentDidMount() {
//     this.props.clearErrors();
//   }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/profile");
    }

    this.setState({ errors: nextProps.errors });
  }
  
  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(this.props.closeModal);
  }


  handleInput(type) {
    return e => {
      this.setState({
        [type]: e.target.value
      });
    }
  }

  loginDemoUser(e) {
    e.preventDefault();
    let demo = {
        email: "demo@pensive.com",
        password: "password",
      };
  
      this.props.processForm(demo).then(this.props.closeModal);
  }


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


    // Sign up/Log in message
    let existingAccountMessage;
    if (this.props.formType === 'Log in') {
      existingAccountMessage = "Don't have an account?";
    } else {
      existingAccountMessage = "Already have an account?";
    }


    let demobutton = (this.props.formType === 'Log in') ? (
        <div className='demobutton'>
        <a 
          href="#" 
          onClick={this.loginDemoUser} 
          id="modal__btn-submit-id"
          className="modal__btn--submit modal__btn--submit-demo modal__btn">Log in with demo account</a>
        <div className="modal__divider-container">
          <p className="modal__divider-content">or</p>
        </div>
        </div>
    ) : (
        <div></div>
    );


    return (
      <div className="modal__form-container">
        <h2 className="modal__header">{this.props.formType}</h2>
        <a 
          href="#" 
          className="modal__btn-close"
          onClick={this.props.closeModal} >
          <i className="fas fa-times">close</i>
        </a>
        {demobutton}
        {this.renderErrors()}
        <br/>
        <form 
          onSubmit={this.handleSubmit} 
          className="ui form modal__form">


          <input 
            type="text" 
            value={this.state.email} 
            placeholder="Email"
            onChange={this.handleInput('email')} 
            className="modal__input-text input__text modal__input-text--username"/>
          <br/>
          <input 
            type="password" 
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleInput('password')} 
            className="modal__input-text input__text modal__input-text--password"/>
          <br /><br />
          <input 
            type="submit" 
            value={this.props.formType} 
            id="modal__btn-submit-id"
            className="ui button basic modal__btn--submit modal__btn" />
        </form>
        <div className="modal__other-form-container">
          <p className="modal__account-msg">
            {existingAccountMessage}
          </p>
          {this.props.otherForm}
        </div>
      </div>
    );
  }
}

export default SessionForm;