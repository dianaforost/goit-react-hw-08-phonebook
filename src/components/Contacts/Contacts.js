import { selectFilter, selectContacts,} from 'redux/contacts/selectors';
import { useSelector } from "react-redux";
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchContacts} from 'redux/contacts/operations'
// import { getFilteredContacts } from 'redux/selectors'
import css from './Contacts.module.css';

export const Contacts = () => {
    const contactsArray = useSelector(selectContacts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);
      const filter = useSelector(selectFilter);
      const getFilteredContacts = () =>{
          const normalizedFilter = filter.filter.toLowerCase().trim();
          return contactsArray.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter))
      }
        const filteredContacts = getFilteredContacts();


    //   const handleClick = () =>{
    //     dispatch(deleteContact(contact.id))
    //   }
    return <ul className={css.list}>
        {filteredContacts.length === 0 ? null :(
            <>
            {filteredContacts.map(contact =>{
                return (
            <li key={contact.id} className={css.item}>
                <p className={css.itemTitle}>{contact.name}:</p>
                <span className={css.value}>{contact.number}</span>
                <button className={css.btn} type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
                >
                    <svg className={css.icon} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={24} height={24}>
                        <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/>
                    </svg>
                </button>
            </li>
                )
            })}
            </>
        )
        }
    </ul>
}