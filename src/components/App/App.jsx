import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Container } from './App.style';

export const App = () => {
  return (
    <Container>
      <ContactForm />
      <ContactsList /> 
    </Container>
  );
};