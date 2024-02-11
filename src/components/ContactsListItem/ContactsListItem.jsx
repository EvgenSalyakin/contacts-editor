import { Item, Name, Number } from './ContactsListItem.module';

export const ContactsListItem = ({ contact, handleDelete }) => {
  return (
    <>
      <Item>
        <Name>{contact.name}</Name>
        <Number>{contact.number}</Number>
      </Item>
      <button
        onClick={() => handleDelete(contact.id)}
        style={{
          width: '50px',
          display: 'inline-block',
          [`font-size`]: ' 9px',
        }}
      >
        Delete
      </button>
    </>
  );
};
