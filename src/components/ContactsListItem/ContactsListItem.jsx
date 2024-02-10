import { Item, Name, Number } from './ContactsListItem.module';

export const ContactsListItem = ({ name, number }) => {
  return (
    <Item>
      <Name>{name}</Name>
      <Number>{number}</Number>
    </Item>
  );
};
