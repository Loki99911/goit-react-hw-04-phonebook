import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { ListBlock } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ListBlock>
      {contacts.map(contact => {
        const { id } = contact;
        return (
          <ContactItem
            key={id}
            contactItem={contact}
            onClick={() => onClick(id)}
          />
        );
      })}
    </ListBlock>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};