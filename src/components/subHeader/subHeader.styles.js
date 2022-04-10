import styled from "styled-components";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { Text } from "../typography/text.component";

export const SubHeaderContainer = styled(FlexibleDiv)`
  justify-content: space-between;
  padding: 15px 2%;
`;
export const DirectorySection = styled(FlexibleDiv)`
  width: auto;
  justify-content: flex-start;
`;
export const MainDirectory = styled(Text)`
  color: ${colors.black.strong};
  font-size: ${fontSizes.h5};
  font-weight: ${fontWeights.bold};
  text-decoration: none;
  cursor: pointer;
`;

export const SearchBarSection = styled(FlexibleDiv)`
  width: 55%;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: row;
    margin: 0.5rem 0;
  }
`;

export const DropDownWrapper = styled(FlexibleDiv)`
  width: 25%;
  height: auto;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: row;
    margin: 0.5rem 0;
  }
`;

export const ButtonSection = styled(FlexibleDiv)`
  width: 15%;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: row;
    margin: 0.5rem 0;
  }
`;

export const Wrapper = styled(FlexibleDiv)`
  width: 60%;
  height: auto;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: row;
  }
`;
