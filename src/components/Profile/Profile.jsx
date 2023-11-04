import {
  ProfileBox,
  Description,
  Avatar,
  Username,
  Item,
  List,
  Label,
  Quantity,
  Tag,
  Location,
} from './Profile.styled';
export const Profile = props => {
  return (
    <ProfileBox>
      <Description class="description">
        <Avatar src={props.user.avatar} alt="User avatar" />
        <Username>{props.user.username}</Username>
        <Tag>@{props.user.tag}</Tag>
        <Location>{props.user.location}</Location>
      </Description>

      <List>
        <Item>
          <Label>Followers</Label>
          <Quantity>{props.user.stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{props.user.stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{props.user.stats.likes}</Quantity>
        </Item>
      </List>
    </ProfileBox>
  );
};
//   username,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
