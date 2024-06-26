import { useDispatch } from "react-redux";
import css from "../Contact/Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.wrap}>
      <div className={css.content}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
