import PropTypes from 'prop-types';
import { FilterTitle, FilterInput } from './Filter.styled';

export const Filter = ({ filterInput, onChange }) => {
  return (
    <FilterTitle>
      Find contact by name:
      <FilterInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
        value={filterInput}
      />
    </FilterTitle>
  );
};

Filter.propTypes = {
  filterInput: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};