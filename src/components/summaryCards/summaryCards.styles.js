import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../typography/text.component";
import { fontSizes,fontWeights } from "../../infrastructure/theme/fonts";

export const LinkWrapper = styled(Link)`
  color: auto;
  margin: 0;
  padding: 0;
  text-decoration: none;
  cursor: pointer;
`;

export const SummaryCardStyle = styled.div`
padding:${({ padding }) => (padding ? padding : "23px 0px")}};
background:${({ bg }) => (bg ? bg : colors.bg.white)};
width: ${({ width }) => (width ? width : "260px")};
min-width: 110px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
flex-basis:31%;
border-radius:15px;
border:2.5px solid ${({ color }) => (color ? color : colors.black.regular)};

svg{
    fill:${({ color }) => (color ? color : colors.black.regular)};
    width:1.7rem;
     height:1.7rem;
};


@media only screen and (max-width:670px){
    padding:17px;
    width:270px
};
@media only screen and (max-width:470px){
    width:200px;
    padding:2px;
};
@media only screen and (max-width:270px){
    width:119px;
}

`;

export const Title = styled(Text)`
  color: ${({ color }) => (color ? color : colors.black.strong)};
  font-size:${fontSizes.body};
  font-weight:${fontWeights.bold};
`;
export const SubTitle = styled(Text)`
  /* color: ${({ color }) => (color ? color : colors.black.strong)}; */
  font-size: ${fontSizes.smallBody};
`;
