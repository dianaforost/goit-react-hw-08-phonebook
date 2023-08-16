import React, { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from '../../redux/contacts/operations';
import { selectContacts, selectPage } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';
import css from './PhoneBook.module.css';
import { Outlet } from 'react-router-dom';
export const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const currentPage = useSelector(selectPage);
  const onSubmit = e => {
    e.preventDefault();
    const userNameValue = e.target.elements.name.value;
    const emailValue = e.target.elements.email.value;
    const phoneValue = e.target.elements.phone.value;
    const contact = {
      name: userNameValue,
      email: emailValue,
      phone: phoneValue,
    };
    if (contacts.some(x => x.name === userNameValue)) {
      alert(`${userNameValue} is already is contacts`);
      return;
    } else if (contacts.some(x => x.number === phoneValue)) {
      alert(` Number ${phoneValue} is already is contacts`);
      return;
    } else {
      dispatch(addContact(contact)).then(() => {
        dispatch(fetchContacts({ page: currentPage }));
      });
      e.target.reset();
    }
  };
  return (
    <>
      <Suspense fallback={<p>Loading</p>}>
        <Outlet />
      </Suspense>
      <form onSubmit={onSubmit} className={css.form}>
        <label htmlFor="name">Name</label>
        <input
          className={css.inputName}
          type="text"
          name="name"
          placeholder="Like Name Surname"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          required
        />
        <label htmlFor="name">Email</label>
        <input
          className={css.inputName}
          type="text"
          name="email"
          placeholder="Like example@ex.com"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          className={css.inputNumber}
          type="tel"
          name="phone"
          placeholder="Like 111-11-11"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete="off"
          required
        />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </>
  );
};
