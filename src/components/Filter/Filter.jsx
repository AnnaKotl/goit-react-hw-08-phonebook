import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { StyledInput } from '../FormContacts/Form.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import { FilterWrapper } from './Filter.styled';
import { SecondaryTitle } from '../Layout/Layout.styled';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <FilterWrapper>
      <SecondaryTitle>Contacts</SecondaryTitle>
      <label>
        <StyledInput
          type="text"
          name="filter"
          value={filter}
          onChange={handleChangeFilter}
          placeholder="Find contacts by name"
        />
      </label>
    </FilterWrapper>
  );
}

export default Filter;
