import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';
class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
    id: '',
  };
  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value, id: uuidv4() });
  };
  handleFormSubmite = event => {
    event.preventDefault();
    const { name, phone, id } = this.state;
    const { onAdd, onCheckUnique } = this.props;
    onCheckUnique(name)
      ? alert('Contact is exists')
      : onAdd({ id, name, phone });
    this.resetForm();
  };

  resetForm = () => this.setState({ name: '', phone: '' });
  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleFormSubmite} className={s.form}>
        <label className={s.formInput}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChangeForm}
          ></input>
        </label>
        <label className={s.formInput}>
          Number
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone"
            value={phone}
            onChange={this.handleChangeForm}
          ></input>
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default ContactForm;
