import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const UserName = styled.h2`
  align-items: center;
  display: flex;
  font-size: 18px;
  justify-content: center;
`;

export const ButtonLogOut = styled.button`
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 16px;
  padding: 10px 20px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  font-weight: bold;

  background-color: #e63c22;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;
  align-self: center;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 8px 16px #662d24;
    background-color: #b32d19;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #662d24;
  }

  &:active {
    transform: scale(0.95);
  }
`;
