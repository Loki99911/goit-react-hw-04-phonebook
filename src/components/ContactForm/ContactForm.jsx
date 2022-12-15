import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormBlock, FormTitle, FormInput, FormBtn } from './ContactForm.styled';

export const ContactForm = ({newContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    newContact({name, number});
    setName('');
    setNumber('');
  };

  return (
    <FormBlock onSubmit={handleSubmit}>
      <FormTitle>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </FormTitle>
      <FormTitle>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </FormTitle>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormBlock>
  );
};


ContactForm.propTypes = {
  newContact: PropTypes.func.isRequired,
};
