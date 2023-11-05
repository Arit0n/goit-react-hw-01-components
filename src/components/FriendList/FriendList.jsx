import { List, Item, Status, Name, Avatar } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <Item>
            <Status key={friend.id} $variant={friend.isOnline}></Status>
            <Avatar
              src={friend.avatar}
              alt="User avatar"
              width="80"
              height="80"
            />

            <Name>{friend.name}</Name>
          </Item>
        );
      })}
    </List>
  );
};
