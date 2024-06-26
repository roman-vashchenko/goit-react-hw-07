import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectError = useSelector((state) => state.contacts.error);
  // const selectNameFilter = useSelector((state) => state.filters.name);
  // const visibleContacts = selectContacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  // );
  return (
    <div>
      {selectError && <p className={css.error}>{selectError}</p>}
      {selectContacts.length > 0 && (
        <ul className={css.list}>
          {selectContacts.map((contact) => (
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
