import { ContactsListItem } from 'components';

import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleBottom,
  LeaderBoardProfiles,
} from './ContactsList.module';

export const ContactsList = ({ list, handleDelete }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleBottom>Contacts</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {list.map(contact => (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
          />
        ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
