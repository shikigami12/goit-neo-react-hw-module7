import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  phone: Yup.string()
    .min(3, 'Phone must be at least 3 characters')
    .max(50, 'Phone must be less than 50 characters')
    .required('Phone is required'),
});

export const ContactForm = () => {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ name: '', phone: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addContact({ name: values.name, phone: values.phone }));
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <label htmlFor={nameId}>Name</label>
              <Field type="text" name="name" id={nameId} />
              <ErrorMessage
                name="name"
                component="div"
                className={css.errorMessage}
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor={phoneId}>Phone</label>
              <Field type="text" name="phone" id={phoneId} />
              <ErrorMessage
                name="phone"
                component="div"
                className={css.errorMessage}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={css.submitButton}
            >
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
