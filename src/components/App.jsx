import { useState, useEffect} from 'react';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList ';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(() => {return (
    JSON.parse(window.localStorage.getItem('lastState')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  )});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('lastState', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts!`);
    }
    const contact = { id: nanoid(), name, number };
    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filterInput = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1 style={{ margin: 0, padding: 0 }}>Phonebook</h1>
      <ContactForm newContact={addNewContact} />

      <h2 style={{ margin: 0, padding: 0 }}>Contacts</h2>
      <Filter filterInput={filter} onChange={filterInput} />
      <ContactList contacts={filterContact()} onClick={deleteContact} />
    </div>
  );
};
