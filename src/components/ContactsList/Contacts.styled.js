import { styled } from 'styled-components';
import { Button } from '@chakra-ui/react';

const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 100%;
  margin: 0 auto;
`;

const ListItem = styled.li`
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

const ContactText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: large;
`;

const DeleteButton = styled(Button)`
  background-color: #f27868 !important;
  border-radius: 100px;
  box-shadow: rgba(187, 44, 44, 0.2) 0 -25px 18px -14px inset,
    rgba(187, 44, 44, 0.15) 0 1px 2px, rgba(187, 44, 44, 0.15) 0 2px 4px,
    rgba(187, 44, 44, 0.15) 0 4px 8px, rgba(187, 44, 44, 0.15) 0 8px 16px,
    rgba(187, 44, 44, 0.15) 0 16px 32px;
  cursor: pointer;
  display: inline-block;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(187, 44, 44, 0.35) 0 -25px 18px -14px inset,
      rgba(187, 44, 44, 0.25) 0 1px 2px, rgba(187, 44, 44, 0.25) 0 2px 4px,
      rgba(187, 44, 44, 0.25) 0 4px 8px, rgba(187, 44, 44, 0.25) 0 8px 16px,
      rgba(187, 44, 44, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;

export const ContactWrap = styled.div`
  display: flex;
  gap: 5px;
`;

export { List, ListItem, ContactText, DeleteButton };
