import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import FormContacts from 'components/FormContacts/FormContacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <FormContacts />
      <Filter />
      <ContactsList />
    </>
  );
};

export default Contacts;