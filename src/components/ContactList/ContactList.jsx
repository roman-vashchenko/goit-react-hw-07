import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);

  return (
    <div>
      {loading && <p className={css.loader}>... Loading</p>}
      {error && <p className={css.error}>{error}</p>}
      {visibleContacts.length > 0 && (
        <ul className={css.list}>
          {visibleContacts.map((contact) => (
            <li key={contact.id} className={css.item}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
