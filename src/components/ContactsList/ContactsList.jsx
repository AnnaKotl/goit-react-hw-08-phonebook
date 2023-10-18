import { useSelector, useDispatch } from 'react-redux';
import { ColorRing, FallingLines } from 'react-loader-spinner';
import { useState } from 'react';

import { deleteContact } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectFilteredContacts,
} from 'redux/contacts/selectors';
import {
  List,
  ListItem,
  ContactText,
  DeleteButton,
  ContactWrap,
} from './Contacts.styled';

function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);
  const [isLoadingMap, setIsLoadingMap] = useState({});

  const handleClickDeleteButton = event => {
    const { value } = event.currentTarget;
    if (isLoadingMap[value]) {
      return;
    }
    setIsLoadingMap(prevState => ({
      ...prevState,
      [value]: true,
    }));
    dispatch(deleteContact(value));
  };

  return (
    <>
      <div>
        <List>
          {isError && <p style={{ color: 'red', fontSize: 18 }}>{isError}</p>}
          {isLoading && contacts.length === 0 ? (
            <FallingLines
              color="#4fa94d"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          ) : (
            filteredContacts.map(contact => (
              <ListItem key={contact.id}>
                <ContactWrap>
                  {' '}
                  <ContactText>{contact.name}:</ContactText>
                  <ContactText>{contact.number}</ContactText>
                </ContactWrap>
                  <DeleteButton
                    type="button"
                    name="delete"
                    value={contact.id}
                    disabled={isLoadingMap[contact.id]}
                    onClick={handleClickDeleteButton}
                  >
                    {' '}
                    {isLoadingMap[contact.id] && (
                      <ColorRing visible={true} height="18" width="18" />
                    )}{' '}
                    Delete
                  </DeleteButton>
              </ListItem>
            ))
          )}
        </List>
      </div>
    </>
  );
}

export default ContactsList;