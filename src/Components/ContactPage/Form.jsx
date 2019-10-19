import React from 'react';

import s from './ContactPage.module.css'

class FormArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	valueName: '',
    	valueEmail: '',
    	valueSubject: '',
    	valueMessage: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({valueName: event.target.value});
  }handleChangeEmail(event) {
    this.setState({valueEmail: event.target.value});
  }handleChangeSubject(event) {
    this.setState({valueSubject: event.target.value});
  }handleChangeMessage (event) {
    this.setState({valueMessage: event.target.value});
  }

  handleSubmit(event) {
    console.log('Data: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.FormArea}>
        <label>
          Имя:
          <input type="text" value={this.state.valueName} onChange={this.handleChangeName} />
        </label>
        <label>
          Email:
          <input type="text" value={this.state.valueEmail} onChange={this.handleChangeEmail} />
        </label>
        <label>
          Subject:
          <input type="text" value={this.state.valueSubject} onChange={this.handleChangeSubject} />
        </label>
        <label>
          Message:
          <textarea type="text" value={this.state.valueMessage} onChange={this.handleChangeMessage} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

const Form = () => {
  return (
    <div className={s.Form}>
    	<FormArea />
    </div>
  );
}

export default Form;