import { ContactsListItem } from 'components';

import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleBottom,
  LeaderBoardProfiles,
} from './ContactsList.module';

export const ContactsList = ({ list }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleBottom>Contacts</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {list.map(({ id, name, number }) => (
          <ContactsListItem key={id} name={name} number={number} />
        ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
