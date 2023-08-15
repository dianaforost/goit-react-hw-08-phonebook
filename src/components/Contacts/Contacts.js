import {
  selectFilter,
  selectContacts,
  selectTotalContacts,
} from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import css from './Contacts.module.css';

export const Contacts = () => {
  const [page, setCurrentPage] = useState(1);
  const contactsArray = useSelector(selectContacts);
  const total = useSelector(selectTotalContacts);
  const dispatch = useDispatch();
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(fetchContacts({ page: page }));
  }, [dispatch, page]);
  const filter = useSelector(selectFilter);
  const getFilteredContacts = () => {
    const normalizedFilter = filter.filter.toLowerCase().trim();
    if (contactsArray) {
      return contactsArray.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return null;
  };
  const filteredContacts = getFilteredContacts() || contactsArray || [];
  if (!contactsArray) {
    return alert('Sorry there are some problems');
  }
  const handleClick = contactId => {
    console.log(contactId);
    dispatch(deleteContact(contactId)).then(() => {
      dispatch(fetchContacts({ page: page }));
    });
  };
  return (
    <div>
      {contactsArray === undefined ? (
        <p>Sorry</p>
      ) : (
        <ul className={css.list}>
          {filteredContacts.length === 0 ? null : (
            <>
              {filteredContacts.map(contact => {
                return (
                  <li key={contact.id} className={css.item}>
                    <p className={css.itemTitle}>{contact.name}:</p>
                    <span className={css.value}>{contact.phone}</span>
                    <button
                      className={css.btn}
                      type="button"
                      onClick={() => handleClick(contact._id)}
                    >
                      <svg
                        className={css.icon}
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                      >
                        <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" />
                        <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" />
                        <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
                      </svg>
                    </button>
                  </li>
                );
              })}
            </>
          )}
        </ul>
      )}

      <div className={css.pagination}>
        {Array.from({ length: Math.ceil(total / 5) }).map((_, index) => (
          <button
            key={index}
            className={css.pageButton}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
