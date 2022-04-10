import {
  LinkWrapper,
  SummaryCardStyle,
  Title,
  SubTitle,
} from "./summaryCards.styles";
import { Icon } from "../header/header.styles";


const SummaryCard = ({
  path,
  icon,
  qoute,
  title,
  color,
  bg,
  width,
  padding,
}) => {
  return (
    <LinkWrapper to={path}>
      <SummaryCardStyle color={color} bg={bg} width={width} padding={padding}>
        <Icon>{icon}</Icon>
        <Title color={color}>{title}</Title>
        <SubTitle>{qoute}</SubTitle>
      </SummaryCardStyle>
    </LinkWrapper>
  );
};

export default SummaryCard;
