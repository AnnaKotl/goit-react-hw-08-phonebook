import { styled } from 'styled-components';

export const ListWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto 40px;
  padding: 20px;
  width: 500px;
  background-color: #f2d044;

  box-shadow: rgba(0, 0, 0, 0.1) 0px -20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px -10px 10px -5px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  max-width: 500px;
  margin-bottom: 5px;
  border-radius: 5px;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const ContactText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: large;
`;

export const DeleteButton = styled.button`
  margin: 4px;
  padding: 8px;
  font-size: 12px;
  background-color: #e63c22;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;
  width: 60px;
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

export const ContactWrap = styled.div`
  display: flex;
  gap: 5px;
`;