import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";
const drawer = "200px";

export const LayoutMain = styled('div')`
  background: ${colors.bg.white};
  width: ${({ smallDrawer }) =>
    smallDrawer ? `calc(100% - ${drawer})` : " calc(100% - 50px)"};
  margin: 0 0 0 auto;
  min-height: calc(100vh - 60px);
  transition: 300ms ease-in-out;
  overflow: hidden;
  @media (max-width: 600px) {
  padding: 20px;
    width: 100%;
  }
`;
