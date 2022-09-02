import React from 'react';
import { Link } from 'react-router-dom';
import { IoCloseCircle } from "react-icons/io5";


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    (this.props.formType === 'Log in') ? (
      this.state = {
        email: '',
        password: '',
        errors: {}
      }) : (
      this.state = {
        email: "",
        username: "",
        password: "",
        password2: "",
        errors: {},
      });
    

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

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.processForm(this.state)
  //     .then(this.props.closeModal);
  // }

  handleSubmit(e) {
    e.preventDefault();
    (this.props.formType === 'Log in') ? (
      this.props.processForm(this.state)
      .then(this.props.closeModal)
    ) : (
      this.props.processForm(this.state)
      .then(this.props.openModal)
          )
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
      <ul className='session-errors'>
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

    let inputpart = (this.props.formType === 'Log in') ? (
      <div>
      <div className='session-input-div'>
            <p>Email</p>
          <input 
            type="text" 
            value={this.state.email} 
            placeholder=""
            onChange={this.handleInput('email')} 
            className="modal__input-text input__text modal__input-text--username"/>
          </div>
          <br/>
          <div className='session-input-div'>
            <p>Password</p>
          <input 
            type="password" 
            value={this.state.password}
            placeholder=""
            onChange={this.handleInput('password')} 
            className="modal__input-text input__text modal__input-text--password"/>
          <br />
          </div>
          </div>
  ) : (
    <div>
    <div className='session-input-div'>
          <p>Email</p>
        <input 
          type="text" 
          value={this.state.email} 
          placeholder=""
          onChange={this.handleInput('email')} 
          className="modal__input-text input__text modal__input-text--username"/>
        </div>
        <br/>
        <div className='session-input-div'>
          <p>Username</p>
        <input 
          type="text" 
          value={this.state.username} 
          placeholder=""
          onChange={this.handleInput('username')} 
          className="modal__input-text input__text modal__input-text--username"/>
        </div>
        <br/>
        <div className='session-input-div'>
          <p>Password</p>
        <input 
          type="password" 
          value={this.state.password}
          placeholder=""
          onChange={this.handleInput('password')} 
          className="modal__input-text input__text modal__input-text--password"/>
        <br />
        </div>
        <div className='session-input-div'>
          <p>Confirm Password</p>
        <input 
          type="password" 
          value={this.state.password2} 
          placeholder=""
          onChange={this.handleInput('password2')} 
          className="modal__input-text input__text modal__input-text--username"/>
        </div>
        <br/>
        </div>
  );



    let demobutton = (this.props.formType === 'Log in') ? (
        <a
          href="#" 
          onClick={this.loginDemoUser} 
          id="modal__btn-submit">Demo Log In</a>
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
          <IoCloseCircle style={{color: '#cc5500', fontSize: '35px'}}/>
        </a>
        <br/>
        <form 
          onSubmit={this.handleSubmit} 
          className="ui form modal__form">
          {inputpart}
          <br />
          <div className='modal-session-submit-button'>
          <input 
            type="submit" 
            value={this.props.formType} 
            id="modal__btn-submit"/>
          
          <br />
            {demobutton}
            </div>
          {this.renderErrors()}
        </form>
        <br />
        
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