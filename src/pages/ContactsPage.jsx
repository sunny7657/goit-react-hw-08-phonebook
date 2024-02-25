import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { Section } from 'components/Section/Section';
import React from 'react';
import {
  StyledContactsContainer,
  StyledContactsSection,
} from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <StyledContactsSection>
      <StyledContactsContainer>
        <Section title="Phonebook">
          <FormAddContact />
        </Section>
      </StyledContactsContainer>
      <StyledContactsContainer>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </StyledContactsContainer>
    </StyledContactsSection>
  );
};

export default ContactsPage;
