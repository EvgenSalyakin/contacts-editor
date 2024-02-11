import { Button, Item, Name, Number } from './ContactsListItem.module';

export const ContactsListItem = ({ contact, handleDelete }) => {
  return (
    <>
      <Item>
        <Name>{contact.name}</Name>
        <Number>{contact.number}</Number>
        <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
      </Item>
    </>
  );
};
