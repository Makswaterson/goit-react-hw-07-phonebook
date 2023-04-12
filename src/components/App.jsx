import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppStyled } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectAllContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppStyled>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </AppStyled>
  );
};
