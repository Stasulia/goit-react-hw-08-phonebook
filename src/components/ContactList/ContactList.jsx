import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

import {
  selector,
  //selectorError,
  //selectorIsLoading,
} from 'store/contacts/selectorsContacts';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'store/contacts/contactsThunk';

const ContactList = () => {
  const selectorContacts = useSelector(selector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };
  return (
    <>
      <ul className={css.contactList}>
        {selectorContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            <p className={css.contactText}>
              {name} : {number}
            </p>
            <button
              className={css.contactBtn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
