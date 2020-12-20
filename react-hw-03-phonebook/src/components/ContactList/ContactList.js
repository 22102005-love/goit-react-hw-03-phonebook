import s from './ContactList.module.css';

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.listContact}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}:{contact.phone}
          <button onClick={() => onRemove(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
