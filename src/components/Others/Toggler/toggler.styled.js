/*
 * style: toggler.styled
 * author: Favour George
 * Date: April 9, 2020
 * styling the toggler button
 */

import styled from 'styled-components';

export const ToggleThemeStyles = styled.button`
  background: ${({ theme }) => theme.gradient.primary};
  border: 2px solid ${({ theme }) => theme.palette.text.secondary};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;
