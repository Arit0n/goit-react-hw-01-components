import { Item, Status, Name, Avatar } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status $variant={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="80" height="80" />
      <Name>{name}</Name>
    </Item>
  );
};
