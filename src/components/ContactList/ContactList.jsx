import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className={css.container}>
        {filteredContacts.length > 0 &&
          filteredContacts.map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
            />
          ))}
      </div>
    </>
  );
};
