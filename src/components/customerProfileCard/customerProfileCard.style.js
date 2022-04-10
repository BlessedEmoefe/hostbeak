import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../typography/text.component";
export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-drection: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-contents: space-evenly;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  flex-basis: ${({ flexBasis }) => (flexBasis ? flexBasis : "50%")};
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-contents: space-evenly;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: ${({ width }) => (width ? width : "40px")};
  height: ${({ height }) => (height ? height : "40px")};
  border-radius: 50%;
  object-fit: cover;
`;

export const TextCol = styled.div`
  margin: ${({ margin }) => (margin ? margin : "auto")};
  display: flex;
  flex-direction: column;
  justify-contents: space-evenly;
  align-items: flex-start;
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "12px")};
`;

export const Span = styled(Text)`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "9px")};
  color: ${colors.primary};
`;
export const DescriptiveText = styled(Text)`
  display: flex;
  alig-items: baseline;
`;
