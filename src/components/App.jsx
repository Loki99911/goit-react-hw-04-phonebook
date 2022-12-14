import React, { Component } from 'react';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList ';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const prevState = localStorage.getItem('lastState');
    const newState = JSON.parse(prevState);
    if (prevState) {
      this.setState({ contacts: newState });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('lastState', JSON.stringify(this.state.contacts));
    }
  }


  addNewContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts!`);
    }

    const contact = { id: nanoid(), name, number };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterInput = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filterContact = () => {

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1 style={{ margin: 0, padding: 0 }}>Phonebook</h1>
        <ContactForm newContact={this.addNewContact} />

        <h2 style={{ margin: 0, padding: 0 }}>Contacts</h2>
        <Filter filterInput={this.state.filter} onChange={this.filterInput} />
        <ContactList
          contacts={this.filterContact()}
          onClick={this.deleteContact}
        />
      </div>
    );
  }
}
