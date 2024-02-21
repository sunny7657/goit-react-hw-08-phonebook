import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { Section } from 'components/Section/Section';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Section title="Phonebook">
        <FormAddContact />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default HomePage;
