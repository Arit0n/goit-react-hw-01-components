import {
  Section,
  List,
  Item,
  Label,
  Percentage,
  Title,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(stat => {
          return (
            <Item
              key={stat.id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};
