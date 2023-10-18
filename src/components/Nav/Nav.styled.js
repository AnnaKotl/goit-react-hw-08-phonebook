import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  align-items: center;
  border: 0;
  background-color: #e1bf38;
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: rgba(65, 99, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #2e2304;
  display: flex;
  font-size: 16px;
  justify-content: center;
  padding: 10px 20px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &.active {
    background-color: #f5e5a6;
    border: 1px solid transparent;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border: 1px solid #ccab29;
  }

  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;
