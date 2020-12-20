import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm.js';
import ContactList from './components/ContactList/ContactList.js';
import Filter from './components/Filter/Filter.js';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));

  handleCheckUniqueContact = name => {
    const { contacts } = this.state;
    const existContact = contacts.find(contact => contact.name === name);
    return existContact;
  };

  handleRemoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  handleFilterChange = filter => this.setState({ filter });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h2 style={{ fontSize: 40 }}>Form Contact</h2>
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUniqueContact}
        ></ContactForm>
        <h2 style={{ fontSize: 40 }}>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange}></Filter>
        <ContactList
          contacts={visibleContacts}
          onRemove={this.handleRemoveContact}
        ></ContactList>
      </div>
    );
  }
}

export default App;
