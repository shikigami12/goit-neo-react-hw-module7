import 'material-icons/iconfont/material-icons.css';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.contact_info}>
          <p className={css.name}>{name}</p>
          <p className={css.phone}>{number}</p>
        </div>
        <div className={css.actions}>
          <button className={css.delete_button} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
