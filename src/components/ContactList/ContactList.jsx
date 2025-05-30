import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <div className={css.container}>
        {filteredContacts.length > 0 &&
          filteredContacts.map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
      </div>
    </>
  );
};
