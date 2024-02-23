import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { Section } from 'components/Section/Section';
import React from 'react';
import { StyledContainer } from './HomePage.styles';

const HomePage = () => {
  return (
    <StyledContainer>
      <Section title="Phonebook">
        <FormAddContact />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </StyledContainer>
  );
};

export default HomePage;
