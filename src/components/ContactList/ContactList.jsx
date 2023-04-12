import { ContactItem } from '../ContactItem/ContactItem';
import { StyledList, Wrapper } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts, selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { toast } from 'react-hot-toast';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  const deleteContacts = id => {
    dispatch(deleteContact(id));
    const deleteToast = contacts.find(contact => contact.id === id);

    toast.success(
      `${deleteToast.name} is deleted from the contacts list of phonebook!`
    );
  };

  return (
    <Wrapper>
      <StyledList>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={deleteContacts}
            />
          );
        })}
      </StyledList>
    </Wrapper>
  );
};
